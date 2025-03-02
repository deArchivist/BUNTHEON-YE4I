/**
 * Utility functions for formatting and processing messages from the AI
 * Including support for LaTeX formulas and other formatting
 */

/**
 * Process and format the raw message returned by the AI
 * @param {string} message - Raw message from the AI
 * @returns {string} Formatted message with proper markup
 */
export function formatMessage(message) {
  if (!message) return '';
  
  // Process LaTeX formulas
  let formatted = processLatexFormulas(message);
  
  // Process code blocks
  formatted = processCodeBlocks(formatted);
  
  // Process lists
  formatted = processLists(formatted);
  
  // Process line breaks (ensure paragraphs are properly spaced)
  formatted = processLineBreaks(formatted);
  
  return formatted;
}

/**
 * Process LaTeX formulas in the message
 * @param {string} text - The text containing potential LaTeX formulas
 * @returns {string} Text with LaTeX formulas marked for rendering
 */
function processLatexFormulas(text) {
  // Match inline LaTeX: $formula$
  let processed = text.replace(/\$([^$\n]+?)\$/g, '<latex inline>$1</latex>');
  
  // Match block LaTeX: $$formula$$
  processed = processed.replace(/\$\$([^$]+?)\$\$/g, '<latex block>$1</latex>');
  
  // Match LaTeX environments: \begin{env}...\end{env}
  const envPattern = /\\begin\{([^}]+)\}([\s\S]*?)\\end\{\1\}/g;
  processed = processed.replace(envPattern, '<latex env="$1">$2</latex>');
  
  return processed;
}

/**
 * Process code blocks in the message
 * @param {string} text - The text containing potential code blocks
 * @returns {string} Text with code blocks marked for rendering
 */
function processCodeBlocks(text) {
  // Process fenced code blocks: ```language\ncode\n```
  const codeBlockPattern = /```([a-zA-Z]*)\n([\s\S]*?)```/g;
  let processed = text.replace(codeBlockPattern, '<code language="$1">$2</code>');
  
  // Process inline code: `code`
  processed = processed.replace(/`([^`\n]+?)`/g, '<code inline>$1</code>');
  
  return processed;
}

/**
 * Process lists in the message
 * @param {string} text - The text containing potential lists
 * @returns {string} Text with lists properly formatted
 */
function processLists(text) {
  // Identify bullet point lists
  let lines = text.split('\n');
  let inList = false;
  let processed = [];
  
  for (let i = 0; i < lines.length; i++) {
    // Check for bullet points (- or * or •)
    if (lines[i].trim().match(/^[-*•]\s/)) {
      if (!inList) {
        processed.push('<list>');
        inList = true;
      }
      processed.push('<item>' + lines[i].trim().replace(/^[-*•]\s/, '') + '</item>');
    } 
    // Check for numbered lists (1. 2. etc)
    else if (lines[i].trim().match(/^\d+\.\s/)) {
      if (!inList) {
        processed.push('<list ordered>');
        inList = true;
      }
      processed.push('<item>' + lines[i].trim().replace(/^\d+\.\s/, '') + '</item>');
    }
    // End of list
    else {
      if (inList) {
        processed.push('</list>');
        inList = false;
      }
      processed.push(lines[i]);
    }
  }
  
  // Close any open list at the end
  if (inList) {
    processed.push('</list>');
  }
  
  return processed.join('\n');
}

/**
 * Process line breaks for proper paragraph display
 * @param {string} text - The text to process
 * @returns {string} Text with proper paragraph formatting
 */
function processLineBreaks(text) {
  // Replace multiple newlines with paragraph breaks
  return text.replace(/\n{2,}/g, '\n<paragraph-break>\n');
}

/**
 * Detects if message contains LaTeX that needs rendering
 * @param {string} message - The processed message
 * @returns {boolean} True if contains LaTeX formulas
 */
export function containsLatex(message) {
  return message.includes('<latex');
}

/**
 * Detects if message contains code blocks that need syntax highlighting
 * @param {string} message - The processed message
 * @returns {boolean} True if contains code blocks
 */
export function containsCode(message) {
  return message.includes('<code');
}
