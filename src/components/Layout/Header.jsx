import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';

const Header = () => {
  const location = useLocation();
  const { webApp } = useTelegramWebApp();
  
  // Set title based on current route
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'DeepSeek AI';
      case '/prompts':
        return 'Custom Prompts';
      case '/dictionary':
        return 'Khmer-English Dictionary';
      case '/exam-papers':
        return 'Exam Papers';
      case '/reminders':
        return 'Homework Reminders';
      default:
        return 'AI Learning Buddy';
    }
  };
  
  // Update header color to match Telegram theme
  React.useEffect(() => {
    if (webApp.headerColor) {
      webApp.setHeaderColor(webApp.headerColor);
    }
  }, [location.pathname, webApp]);

  return (
    <header className="sticky top-0 z-10 bg-primary text-white shadow-md">
      <div className="container mx-auto py-4 px-4">
        <h1 className="text-xl font-display font-bold">{getTitle()}</h1>
      </div>
    </header>
  );
};

export default Header;
