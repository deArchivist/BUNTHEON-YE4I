import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // User data state
  const [userData, setUserData] = useLocalStorage('user', {
    savedPrompts: [],
    examPapers: [],
    reminders: []
  });

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

  // Prompts management
  const savePrompt = (prompt) => {
    setUserData(prev => ({
      ...prev,
      savedPrompts: [...prev.savedPrompts, prompt]
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
    dictionaryTerms,
    isLoading,
    savePrompt,
    addReminder,
    removeReminder
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
