import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import { AppProvider } from './contexts/AppContext';

// Layout Components
import Header from './components/Layout/Header';
import BottomNav from './components/Navigation/BottomNav';

// Page Components
import HomePage from './components/Home/HomePage';
import PromptsPage from './components/Prompts/PromptsPage';
import DictionaryPage from './components/Dictionary/DictionaryPage';
import ExamPapersPage from './components/ExamPapers/ExamPapersPage';
import RemindersPage from './components/Reminders/RemindersPage';
import ChatPage from './components/Chat/ChatPage';

const App = () => {
  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready();
    WebApp.expand();
    
    // Set theme based on Telegram color scheme
    document.documentElement.classList.add(WebApp.colorScheme === 'dark' ? 'dark' : 'light');
  }, []);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-2 mb-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/prompts" element={<PromptsPage />} />
              <Route path="/dictionary" element={<DictionaryPage />} />
              <Route path="/exam-papers" element={<ExamPapersPage />} />
              <Route path="/reminders" element={<RemindersPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
