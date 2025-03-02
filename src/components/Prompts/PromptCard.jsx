import React, { useState } from 'react';
import { HiOutlineClipboard, HiOutlineBookmark, HiOutlineBookmarkAlt } from 'react-icons/hi';

const PromptCard = ({ prompt, onSave, isSaved }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pixel-card rounded-lg">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold mb-1">{prompt.title}</h3>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
          {prompt.category}
        </span>
      </div>
      
      <p className="text-gray-700 my-2 whitespace-pre-line">{prompt.content}</p>
      
      <div className="flex justify-between mt-3">
        <button
          className="flex items-center text-gray-600 hover:text-primary"
          onClick={copyToClipboard}
        >
          <HiOutlineClipboard className="mr-1" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
        
        <button
          className={`flex items-center ${isSaved ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
          onClick={onSave}
          disabled={isSaved}
        >
          {isSaved ? (
            <>
              <HiOutlineBookmarkAlt className="mr-1" />
              Saved
            </>
          ) : (
            <>
              <HiOutlineBookmark className="mr-1" />
              Save
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;
