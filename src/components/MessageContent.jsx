import React from 'react';
import LatexRenderer from './LatexRenderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { containsLatex, containsCode } from '../utils/messageFormatter';

/**
 * Renders formatted message content with LaTeX and code highlighting
 * 
 * @param {Object} props
 * @param {string} props.content - The formatted message content
 */
const MessageContent = ({ content }) => {
  // If content is null or empty
  if (!content) return null;

  // Process the content to render LaTeX and code blocks
  const renderContent = () => {
    const hasLatex = containsLatex(content);
    const hasCode = containsCode(content);

    // If no special formatting needed, return the content directly
    if (!hasLatex && !hasCode) {
      return <div className="message-text">{content}</div>;
    }

    // Replace the markup tags with actual React components
    const parts = [];
    let currentIndex = 0;
    let key = 0;

    // Helper to add text segments
    const addTextSegment = (endIndex) => {
      if (endIndex > currentIndex) {
        parts.push(
          <span key={key++}>
            {content.substring(currentIndex, endIndex)}
          </span>
        );
        currentIndex = endIndex;
      }
    };

    // Process LaTeX blocks
    const latexBlockRegex = /<latex block>(.*?)<\/latex>/gs;
    let match;
    while ((match = latexBlockRegex.exec(content)) !== null) {
      addTextSegment(match.index);
      parts.push(
        <div key={key++} className="latex-block">
          <LatexRenderer formula={match[1]} display={true} />
        </div>
      );
      currentIndex = match.index + match[0].length;
    }

    // Process inline LaTeX
    const latexInlineRegex = /<latex inline>(.*?)<\/latex>/g;
    while ((match = latexInlineRegex.exec(content)) !== null) {
      addTextSegment(match.index);
      parts.push(
        <span key={key++} className="latex-inline">
          <LatexRenderer formula={match[1]} display={false} />
        </span>
      );
      currentIndex = match.index + match[0].length;
    }

    // Process code blocks
    const codeBlockRegex = /<code language="(.*?)">(.*?)<\/code>/gs;
    while ((match = codeBlockRegex.exec(content)) !== null) {
      addTextSegment(match.index);
      const language = match[1] || 'javascript';
      parts.push(
        <div key={key++} className="code-block">
          <SyntaxHighlighter 
            language={language} 
            style={codeTheme}
            showLineNumbers={true}
          >
            {match[2]}
          </SyntaxHighlighter>
        </div>
      );
      currentIndex = match.index + match[0].length;
    }

    // Process inline code
    const inlineCodeRegex = /<code inline>(.*?)<\/code>/g;
    while ((match = inlineCodeRegex.exec(content)) !== null) {
      addTextSegment(match.index);
      parts.push(
        <code key={key++} className="inline-code">
          {match[1]}
        </code>
      );
      currentIndex = match.index + match[0].length;
    }

    // Add the remaining content
    addTextSegment(content.length);

    return <div className="message-text">{parts}</div>;
  };

  return (
    <div className="message-content">
      {renderContent()}
    </div>
  );
};

export default MessageContent;
