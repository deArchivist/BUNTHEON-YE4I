import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTelegramWebApp } from '../../hooks/useTelegramWebApp';
import CustomBackButton from '../Navigation/CustomBackButton';

const Header = () => {
  const location = useLocation();
  const { webApp } = useTelegramWebApp();
  
  // Set title based on current route
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'BUNTHEON';
      case '/prompts':
        return 'Prompts Library';
      case '/chat':
        return 'AI Chat';
      case '/dictionary':
        return 'Dictionary';
      case '/exam-papers':
        return 'Exam Papers';
      case '/reminders':
        return 'Reminders';
      default:
        return 'BUNTHEON';
    }
  };
  
  // Update header color to match Telegram theme
  React.useEffect(() => {
    if (webApp.headerColor) {
      webApp.setHeaderColor(webApp.headerColor);
    }
  }, [location.pathname, webApp]);

  return (
    <header className="sticky top-0 bg-primary text-white p-4 shadow-md z-10">
      <div className="container mx-auto flex items-center justify-center relative">
        {/* Custom Back Button will show itself when needed */}
        <CustomBackButton />
        
        <h1 className="text-xl font-bold text-center">{getTitle()}</h1>
      </div>
    </header>
  );
};

export default Header;
