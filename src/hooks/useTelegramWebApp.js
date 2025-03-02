import { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';

export function useTelegramWebApp() {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize WebApp
    if (WebApp.initDataUnsafe?.user) {
      setUser(WebApp.initDataUnsafe.user);
    }
    
    setIsInitialized(true);

    // Setup back button handler
    const handleBackButton = () => {
      if (window.history.length > 1) {
        window.history.back();
        return true;
      }
      return false;
    };

    WebApp.BackButton.onClick(handleBackButton);
    
    return () => {
      WebApp.BackButton.offClick(handleBackButton);
    };
  }, []);

  const showBackButton = () => {
    WebApp.BackButton.show();
  };

  const hideBackButton = () => {
    WebApp.BackButton.hide();
  };

  const sendData = (data) => {
    WebApp.sendData(JSON.stringify(data));
  };

  const closeWebApp = () => {
    WebApp.close();
  };

  return {
    user,
    isInitialized,
    showBackButton,
    hideBackButton,
    sendData,
    closeWebApp,
    webApp: WebApp
  };
}
