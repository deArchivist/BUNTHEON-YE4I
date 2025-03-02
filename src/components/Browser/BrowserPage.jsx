import React, { useState, useEffect } from 'react';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';

const BrowserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { showBackButton, hideBackButton } = useTelegramWebApp();
  const deepseekUrl = 'https://chat.deepseek.com/';

  useEffect(() => {
    showBackButton();
    return () => hideBackButton();
  }, [showBackButton, hideBackButton]);

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <div className="bg-primary-light text-white p-3 rounded-t-lg">
        <div className="flex items-center">
          <h2 className="text-sm font-semibold">DeepSeek AI</h2>
          <div className="flex-grow"></div>
          {isLoading && (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          )}
        </div>
      </div>
      
      <div className="flex-grow border-2 border-primary-light rounded-b-lg overflow-hidden">
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading DeepSeek...</p>
            </div>
          </div>
        )}
        <iframe 
          src={deepseekUrl}
          title="DeepSeek Browser"
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
      </div>
      
      <div className="mt-3 text-xs text-center text-gray-500">
        <p>Log in with your DeepSeek account to access all features</p>
      </div>
    </div>
  );
};

export default BrowserPage;
