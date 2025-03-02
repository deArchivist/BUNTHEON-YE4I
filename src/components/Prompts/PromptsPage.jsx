import React, { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import PromptCard from './PromptCard';

const SAMPLE_PROMPTS = [
  {
    id: 1,
    title: "Math Problem Solver",
    content: "Solve this math problem step by step: [INSERT PROBLEM HERE]",
    category: "Academic"
  },
  {
    id: 2,
    title: "Essay Outline Creator",
    content: "Create an outline for an essay about [TOPIC] with introduction, 3 main points, and conclusion.",
    category: "Writing"
  },
  {
    id: 3,
    title: "Khmer Translation Helper",
    content: "Translate this English text to Khmer and explain any cultural nuances: [TEXT HERE]",
    category: "Language"
  },
  {
    id: 4,
    title: "Chemistry Formula Explainer",
    content: "Explain this chemical formula in simple terms and how it works: [FORMULA]",
    category: "Science"
  },
  {
    id: 5,
    title: "Historical Event Summary",
    content: "Summarize the key events, causes and effects of [HISTORICAL EVENT] in bullet points.",
    category: "History"
  }
];

const PromptsPage = () => {
  const { userData, savePrompt } = useContext(AppContext);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Academic', 'Writing', 'Language', 'Science', 'History'];
  const savedPrompts = userData.savedPrompts || [];

  // Combine sample prompts with user saved prompts
  const allPrompts = [...SAMPLE_PROMPTS, ...savedPrompts];
  
  // Filter prompts based on category and search term
  const filteredPrompts = allPrompts.filter(prompt => {
    const matchesCategory = activeCategory === 'All' || prompt.category === activeCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prompt.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search prompts..."
          className="w-full pixel-input rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-1">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-sm border-2 transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {filteredPrompts.map(prompt => (
          <PromptCard 
            key={prompt.id} 
            prompt={prompt}
            onSave={() => savePrompt(prompt)}
            isSaved={savedPrompts.some(p => p.id === prompt.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromptsPage;
