import React, { useState } from 'react';

/**
 * APIErrorBoundary - A component to handle API errors gracefully
 */
const APIErrorBoundary = ({ children }) => {
  const [apiError, setApiError] = useState(null);

  const handleApiError = (error) => {
    console.error('API Error caught by boundary:', error);
    setApiError(error);
    return true; // Error was handled
  };

  const resetError = () => {
    setApiError(null);
  };

  if (apiError) {
    return (
      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-red-600 font-medium mb-2">API Connection Error</h3>
        <p className="text-gray-700 mb-3">
          There was a problem connecting to the AI service. This could be due to:
        </p>
        <ul className="list-disc pl-5 mb-4 text-sm text-gray-600">
          <li>Temporary service outage</li>
          <li>Network connectivity issues</li>
          <li>API rate limiting</li>
        </ul>
        <div className="mt-3">
          <button 
            onClick={resetError}
            className="bg-primary text-white px-3 py-1.5 rounded-md text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return React.cloneElement(children, { 
    onApiError: handleApiError 
  });
};

export default APIErrorBoundary;
