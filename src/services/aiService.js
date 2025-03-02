import OpenAI from 'openai';

const OPENROUTER_API_KEY = "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";
const MODEL = "deepseek/deepseek-r1-distill-llama-70b:free";

// Initialize OpenAI client with OpenRouter configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true, // Required for browser usage
  defaultHeaders: {
    'HTTP-Referer': window.location.href, // Full URL instead of just origin
    'X-Title': 'BUNTHEON Education App',
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (messages) => {
  try {
    console.log("Sending message to OpenRouter using OpenAI client...");
    
    // Verify we have an API key before making the request
    if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === "") {
      throw new Error("API key is missing. Please set a valid OpenRouter API key.");
    }
    
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: messages,
      max_tokens: 1000, // Adding reasonable defaults
      temperature: 0.7,
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`, // Explicitly include auth header
      },
    });
    
    if (!completion.choices || completion.choices.length === 0) {
      throw new Error("Received empty response from AI service");
    }
    
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI service:', error);
    
    // Enhanced error reporting
    if (error.status === 401) {
      console.error('Authentication failed: Check your API key');
    } else if (error.status === 429) {
      console.error('Rate limit exceeded: Too many requests');
    } else if (error.status >= 500) {
      console.error('OpenRouter server error: Try again later');
    }
    
    throw error;
  }
};
