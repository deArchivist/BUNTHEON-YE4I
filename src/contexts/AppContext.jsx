import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Load user data from localStorage or use default values
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : {
      savedPrompts: [],
      dictionary: [],
      examPapers: [],
      reminders: []
    };
  });

  // Current prompt for chat integration
  const [currentPrompt, setCurrentPrompt] = useState(null);
  
  // Chat conversation history
  const [chatHistory, setChatHistory] = useState([]);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  // Dictionary state
  const [dictionaryTerms, setDictionaryTerms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load dictionary data
  useEffect(() => {
    const loadDictionary = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/assets/data/dictionary.json');
        const data = await response.json();
        setDictionaryTerms(data);
      } catch (error) {
        console.error('Failed to load dictionary:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDictionary();
  }, []);

  // Save a prompt to user's saved prompts
  const savePrompt = (prompt) => {
    if (!userData.savedPrompts.some(p => p.id === prompt.id)) {
      setUserData(prev => ({
        ...prev,
        savedPrompts: [...prev.savedPrompts, prompt]
      }));
    }
  };

  // Remove a prompt from saved prompts
  const removePrompt = (promptId) => {
    setUserData(prev => ({
      ...prev,
      savedPrompts: prev.savedPrompts.filter(p => p.id !== promptId)
    }));
  };

  // Reminders management
  const addReminder = (reminder) => {
    setUserData(prev => ({
      ...prev,
      reminders: [...prev.reminders, {
        ...reminder,
        id: Date.now(),
        createdAt: new Date().toISOString()
      }]
    }));
  };
  
  const removeReminder = (id) => {
    setUserData(prev => ({
      ...prev,
      reminders: prev.reminders.filter(reminder => reminder.id !== id)
    }));
  };

  const value = {
    userData,
    setUserData,
    savePrompt,
    removePrompt,
    currentPrompt,
    setCurrentPrompt,
    chatHistory,
    setChatHistory,
    dictionaryTerms,
    isLoading,
    addReminder,
    removeReminder
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
