import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * CustomBackButton component - Works as a fallback when Telegram's BackButton is not supported
 */
const CustomBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [telegramBackButtonSupported, setTelegramBackButtonSupported] = useState(true);
  
  // Only show on non-home pages
  const showBackButton = location.pathname !== '/';

  useEffect(() => {
    // Check if Telegram BackButton is supported
    if (window.Telegram && window.Telegram.WebApp) {
      try {
        if (location.pathname !== '/') {
          window.Telegram.WebApp.BackButton.show();
          window.Telegram.WebApp.BackButton.onClick(() => navigate(-1));
        } else {
          window.Telegram.WebApp.BackButton.hide();
        }
        // If we get here, BackButton is supported
        setTelegramBackButtonSupported(true);
      } catch (error) {
        console.log("Telegram BackButton not supported, using custom button", error);
        setTelegramBackButtonSupported(false);
      }
    } else {
      setTelegramBackButtonSupported(false);
    }
    
    return () => {
      // Clean up event listeners if BackButton is supported
      if (window.Telegram && window.Telegram.WebApp && telegramBackButtonSupported) {
        try {
          window.Telegram.WebApp.BackButton.offClick();
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, [navigate, location.pathname, telegramBackButtonSupported]);
  
  // If we're on the home page or Telegram BackButton is supported, don't show our custom button
  if (!showBackButton || telegramBackButtonSupported) {
    return null;
  }
  
  return (
    <button 
      onClick={() => navigate(-1)}
      className="fixed top-2 left-2 z-50 bg-gray-100 p-2 rounded-full shadow-md"
      aria-label="Go back"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export default CustomBackButton;
