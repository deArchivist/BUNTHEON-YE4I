import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Hook to handle Telegram's back button
 */
export const useTelegramBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check if we're in the Telegram WebApp environment
    if (window.Telegram && window.Telegram.WebApp) {
      const WebApp = window.Telegram.WebApp;
      
      // Show back button if not on the home page
      if (location.pathname !== '/') {
        console.log('Showing back button for path:', location.pathname);
        WebApp.BackButton.show();
        
        // Set up event handler for back button
        const handleBackButton = () => {
          console.log('Back button pressed, navigating back');
          navigate(-1);
        };
        
        WebApp.BackButton.onClick(handleBackButton);
        
        return () => {
          // Cleanup
          WebApp.BackButton.offClick(handleBackButton);
        };
      } else {
        console.log('Hiding back button for home page');
        WebApp.BackButton.hide();
      }
    }
  }, [navigate, location.pathname]);
};

export default useTelegramBackButton;
