// Using OpenRouter API as documented in official documentation
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
