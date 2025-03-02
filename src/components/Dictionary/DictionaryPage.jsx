import React, { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import DictionarySearch from './DictionarySearch';
import TermDisplay from './TermDisplay';

// Sample dictionary data (would be loaded from JSON in production)
const SAMPLE_DICTIONARY = [
  {
    id: 1,
    english: "algorithm",
    khmer: "អាល់ហ្គោរីត",
    definition: "A process or set of rules to be followed in calculations or other problem-solving operations",
    example: "The search algorithm uses historical data to improve results",
    subject: "Computer Science"
  },
  {
    id: 2,
    english: "photosynthesis",
    khmer: "រស្មីសំយោគ",
    definition: "The process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water",
    example: "Photosynthesis occurs in the chloroplasts of plant cells",
    subject: "Biology"
  },
  {
    id: 3,
    english: "democracy",
    khmer: "លទ្ធិប្រជាធិបតេយ្យ",
    definition: "A system of government by the whole population or all eligible members of a state, typically through elected representatives",
    example: "Cambodia has been developing its democratic institutions",
    subject: "Politics"
  },
  {
    id: 4,
    english: "quadratic equation",
    khmer: "សមីការការេ",
    definition: "An equation with a squared term as its highest power",
    example: "The quadratic formula can solve any quadratic equation",
    subject: "Mathematics"
  },
  {
    id: 5,
    english: "metaphor",
    khmer: "រូបប្រដូច",
    definition: "A figure of speech in which a word or phrase is applied to an object or action that is not literally applicable",
    example: "Her tears were a river flowing down her cheeks",
    subject: "Literature"
  }
];

const DictionaryPage = () => {
  const { isLoading } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [activeSubject, setActiveSubject] = useState('All');
  
  // Use sample dictionary in development, would use context in production
  const dictionaryTerms = SAMPLE_DICTIONARY;
  
  const subjects = ['All', ...new Set(dictionaryTerms.map(term => term.subject))];
  
  // Filter terms based on search and subject
  const filteredTerms = dictionaryTerms.filter(term => {
    const matchesSubject = activeSubject === 'All' || term.subject === activeSubject;
    const matchesSearch = 
      term.english.toLowerCase().includes(searchTerm.toLowerCase()) || 
      term.khmer.includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="py-4">
      <DictionarySearch 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        subjects={subjects}
        activeSubject={activeSubject}
        onSubjectChange={setActiveSubject}
      />
      
      {isLoading ? (
        <div className="flex justify-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="mt-6">
          {selectedTerm ? (
            <div>
              <button 
                onClick={() => setSelectedTerm(null)}
                className="text-primary mb-4 flex items-center"
              >
                ← Back to list
              </button>
              <TermDisplay term={selectedTerm} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filteredTerms.length > 0 ? (
                filteredTerms.map(term => (
                  <div 
                    key={term.id}
                    onClick={() => setSelectedTerm(term)}
                    className="pixel-card rounded-lg cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{term.english}</h3>
                        <p className="text-gray-600">{term.khmer}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {term.subject}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No terms found. Try a different search.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DictionaryPage;
