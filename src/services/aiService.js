import OpenAI from 'openai';

const OPENROUTER_API_KEY = "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";
const MODEL = "deepseek/deepseek-r1-distill-llama-70b:free";

// Initialize OpenAI client with OpenRouter configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true, // Required for browser usage
  defaultHeaders: {
    'HTTP-Referer': window.location.origin, // Uses the app's origin as the referer
    'X-Title': 'BUNTHEON Education App', // App name for OpenRouter rankings
  },
});

export const sendMessage = async (messages) => {
  try {
    console.log("Sending message to OpenRouter using OpenAI client...");
    console.log("API Key:", OPENROUTER_API_KEY.substring(0, 10) + "...");
    console.log("Messages:", messages);
    
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: messages,
    });

    console.log("Response received successfully:", completion);
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI service:', error);
    if (error.status) {
      console.error(`Status code: ${error.status}`);
    }
    if (error.response) {
      console.error('Error response:', error.response);
    }
    throw error;
  }
};
