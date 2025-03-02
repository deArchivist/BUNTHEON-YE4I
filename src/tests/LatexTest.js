import React from 'react';
import MessageContent from '../components/MessageContent';
import { formatMessage } from '../utils/messageFormatter';

const LatexTest = () => {
  // Create a test message with various formatting including LaTeX
  const rawMessage = `
Here is an inline formula: $E = mc^2$

And a block formula:
$$
\\frac{d}{dx}\\left( \\int_{a}^{x} f(t) dt \\right) = f(x)
$$

And some code:
\`\`\`javascript
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
\`\`\`

And a bullet list:
- Item 1
- Item 2
- Item 3

And a numbered list:
1. First step
2. Second step
3. Third step
  `;
  
  // Format the message using our utility
  const formattedMessage = formatMessage(rawMessage);
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>LaTeX and Code Formatting Test</h2>
      <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <MessageContent content={formattedMessage} />
      </div>
    </div>
  );
};

export default LatexTest;
