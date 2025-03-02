import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * CustomBackButton component - Works as a fallback when Telegram's BackButton is not supported
 */
const CustomBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCustomButton, setShowCustomButton] = useState(false);
  
  // Only show on non-home pages
  const isNotHomePage = location.pathname !== '/';

  useEffect(() => {
    // Always show the custom button on non-home pages since Telegram's BackButton isn't supported
    if (isNotHomePage) {
      setShowCustomButton(true);
      
      // Just for logging - attempt to check if WebApp exists but expect it to fail
      if (window.Telegram && window.Telegram.WebApp) {
        // We know BackButton isn't supported, but log it in a way that doesn't trigger errors
        console.log("Using custom back button as WebApp BackButton isn't supported");
      }
    } else {
      setShowCustomButton(false);
    }
  }, [isNotHomePage]);
  
  // If we're on the home page, don't show our custom button
  if (!showCustomButton) {
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
