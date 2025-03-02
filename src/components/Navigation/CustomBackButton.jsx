import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only show on non-home pages
  if (location.pathname === '/') {
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
