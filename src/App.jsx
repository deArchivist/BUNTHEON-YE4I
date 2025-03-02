import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  // Initialize Telegram WebApp if available
  React.useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <BrowserRouter>
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
            <Route path="*" element={<div className="p-4">Page not found</div>} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
};

export default App;
