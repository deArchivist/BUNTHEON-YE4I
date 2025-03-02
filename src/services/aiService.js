import OpenAI from 'openai';

const OPENROUTER_API_KEY = "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";
const MODEL = "deepseek/deepseek-r1-distill-llama-70b:free";

// Initialize OpenAI client with OpenRouter configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true, // Required for browser usage
  defaultHeaders: {
    'HTTP-Referer': window.location.origin,
    'X-Title': 'BUNTHEON Education App',
  },
});

export const sendMessage = async (messages) => {
  try {
    console.log("Sending message to OpenRouter using OpenAI client...");
    
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: messages,
    });
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI service:', error);
    throw error;
  }
};
