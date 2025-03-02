import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

const PromptCard = ({ prompt, onSave, isSaved }) => {
  const navigate = useNavigate();
  const { setCurrentPrompt } = useContext(AppContext);

  const handleUsePrompt = () => {
    // Set the current prompt and navigate to chat page instead of browser
    setCurrentPrompt(prompt);
    navigate('/chat');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg mb-2">{prompt.title}</h3>
        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
          {prompt.category}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm">{prompt.content}</p>
      
      <div className="flex justify-between">
        <button 
          onClick={handleUsePrompt} 
          className="bg-primary text-white px-4 py-1 rounded-md text-sm"
        >
          Use Prompt
        </button>
        
        <button 
          onClick={() => onSave()} 
          className={`px-3 py-1 rounded-md text-sm border ${
            isSaved 
              ? 'bg-gray-100 text-gray-500 border-gray-300' 
              : 'bg-white text-primary border-primary'
          }`}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;
