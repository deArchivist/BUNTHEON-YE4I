import React from 'react';
import { HiOutlineVolumeUp } from 'react-icons/hi';

const TermDisplay = ({ term }) => {
  const speakTerm = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'english' ? 'en-US' : 'km-KH';
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="pixel-card rounded-lg">
      <div className="flex justify-between items-start">
        <div className="mb-4">
          <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
            {term.subject}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <h2 className="text-2xl font-bold">{term.english}</h2>
          <button 
            onClick={() => speakTerm(term.english, 'english')}
            className="ml-2 text-gray-500 hover:text-primary"
            aria-label="Speak English term"
          >
            <HiOutlineVolumeUp size={20} />
          </button>
        </div>
        <div className="flex items-center">
          <h3 className="text-xl text-gray-700">{term.khmer}</h3>
          <button 
            onClick={() => speakTerm(term.khmer, 'khmer')}
            className="ml-2 text-gray-500 hover:text-primary"
            aria-label="Speak Khmer term"
          >
            <HiOutlineVolumeUp size={20} />
          </button>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-500 mb-1">Definition:</h4>
        <p className="text-gray-800">{term.definition}</p>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-gray-500 mb-1">Example:</h4>
        <p className="text-gray-700 italic">{term.example}</p>
      </div>
    </div>
  );
};

export default TermDisplay;
