import React, { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

/**
 * Component that renders LaTeX formulas using KaTeX library
 * 
 * @param {Object} props
 * @param {string} props.formula - The LaTeX formula to render
 * @param {boolean} props.display - Whether to display as a block (true) or inline (false)
 * @param {string} props.className - Additional CSS classes
 */
const LatexRenderer = ({ formula, display = false, className = '' }) => {
  const containerRef = React.useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (containerRef.current && formula) {
      try {
        katex.render(formula, containerRef.current, {
          throwOnError: false,
          displayMode: display,
          trust: true, // Allow commands that might be dangerous in certain contexts
          strict: 'ignore', // Don't throw errors for small mistakes
        });
        setError(null);
      } catch (error) {
        console.error('Error rendering LaTeX formula:', error);
        setError(error.message);
        // Display error or fallback
        containerRef.current.textContent = formula;
      }
    }
  }, [formula, display]);

  return (
    <div className="latex-container">
      <div 
        ref={containerRef} 
        className={`latex-formula ${display ? 'block-formula' : 'inline-formula'} ${className}`}
      />
      {error && (
        <div className="latex-error" style={{ color: 'red', fontSize: '0.8em' }}>
          LaTeX Error: {error}
        </div>
      )}
    </div>
  );
};

export default LatexRenderer;
