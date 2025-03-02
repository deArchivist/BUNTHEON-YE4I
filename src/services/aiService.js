import { GoogleGenerativeAI } from "@google/generative-ai";

// API key for Gemini
const GEMINI_API_KEY = "AIzaSyD6G2FO1irISjGoyds6jXXrO7MNmY3zNt0";
const MODEL_NAME = "gemini-1.5-flash";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const sendMessage = async (messages) => {
  try {
    console.log("Sending message to Google Gemini API...");

    // Verify we have an API key
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "") {
      throw new Error("API key is missing. Please set a valid Gemini API key.");
    }

    // Get the model
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // Format messages for Gemini
    // Gemini expects a different format than OpenAI, so we need to convert
    const formattedMessages = formatMessagesForGemini(messages);

    // Generate content
    const result = await model.generateContent(formattedMessages);
    const response = result.response.text();
    
    if (!response) {
      throw new Error("Received empty response from AI service");
    }
    
    return response;
  } catch (error) {
    console.error('Error calling Gemini AI service:', error);
    
    // Enhanced error reporting
    if (error.message.includes("401") || error.message.includes("403")) {
      console.error('Authentication failed: Check your API key');
    } else if (error.message.includes("429")) {
      console.error('Rate limit exceeded: Too many requests');
    } else if (error.message.includes("500")) {
      console.error('Gemini server error: Try again later');
    }
    
    throw error;
  }
};

// Helper function to format messages for Gemini
function formatMessagesForGemini(messages) {
  // For a simple implementation, we'll concatenate all messages into a single prompt
  // This is a simplified approach - for more complex conversations, 
  // a more sophisticated formatting would be needed
  
  let prompt = "";
  
  messages.forEach(msg => {
    const role = msg.role === "user" ? "User: " : "Assistant: ";
    prompt += `${role}${msg.content}\n\n`;
  });
  
  // Add a final prompt for the assistant to continue
  if (messages.length > 0 && messages[messages.length - 1].role === "user") {
    prompt += "Assistant: ";
  }
  
  return prompt;
}
