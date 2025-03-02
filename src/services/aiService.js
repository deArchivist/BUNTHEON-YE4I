// Using OpenRouter API with updated API key
const OPENROUTER_API_KEY = "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";
const MODEL = "deepseek/deepseek-r1-distill-llama-70b:free";

export const sendMessage = async (messages) => {
  try {
    console.log("Sending message to OpenRouter...");
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': window.location.origin, // Uses the app's origin as the referer
        'X-Title': 'BUNTHEON Education App' // App name for OpenRouter rankings
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages
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
