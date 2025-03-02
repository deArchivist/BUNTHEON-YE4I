import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const DictionarySearch = ({ 
  searchTerm, 
  onSearchChange, 
  subjects, 
  activeSubject, 
  onSubjectChange 
}) => {
  return (
    <div>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a term in English or Khmer..."
          className="w-full pl-10 pixel-input rounded-md"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="mb-4 overflow-x-auto">
        <div className="flex space-x-2 pb-1">
          {subjects.map(subject => (
            <button
              key={subject}
              onClick={() => onSubjectChange(subject)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-sm border-2 transition-colors ${
                activeSubject === subject 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DictionarySearch;
