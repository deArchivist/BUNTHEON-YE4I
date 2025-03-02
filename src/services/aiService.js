// Get API key from environment variables
const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY || "";
const MODEL = "deepseek/deepseek-r1-distill-llama-70b:free";

export const sendMessage = async (messages) => {
  try {
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

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to get response from AI');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI service:', error);
    throw error;
  }
};
