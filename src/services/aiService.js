// Fallback implementation for API key that handles missing environment variables
const getApiKey = () => {
  // Try to get from environment variable
  const envKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  
  // If environment variable is available, use it
  if (envKey && envKey !== "") {
    console.log("Using API key from environment variable");
    return envKey;
  }
  
  // Otherwise use hardcoded key (not recommended for production)
  console.warn("Environment variable not found, using fallback API key");
  return "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";
};

const OPENROUTER_API_KEY = getApiKey();
const MODEL = "deepseek/deepseek-r1-distill-llama-70b:free";

export const sendMessage = async (messages) => {
  try {
    console.log("Sending message to OpenRouter...");
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'BUNTHEON Education App'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        max_tokens: 1000
      }),
    });

    console.log("Response received, status:", response.status);
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error("API error:", data);
      throw new Error(data.error?.message || 'Failed to get response from AI');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI service:', error);
    throw error;
  }
};
