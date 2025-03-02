import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

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

// Safe Telegram WebApp initialization
const useTelegramWebApp = () => {
  useEffect(() => {
    try {
      // Check if WebApp is available
      if (window.Telegram && window.Telegram.WebApp) {
        const WebApp = window.Telegram.WebApp;
        
        console.log("Initializing Telegram WebApp");
        WebApp.ready();
        WebApp.expand();
        
        // Set theme based on Telegram color scheme
        document.documentElement.classList.add(WebApp.colorScheme === 'dark' ? 'dark' : 'light');
      } else {
        console.log("Telegram WebApp not available, running in standalone mode");
      }
    } catch (error) {
      console.error("Error initializing Telegram WebApp:", error);
    }
  }, []);
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
      <p className="mt-4">កំពុងផ្ទុក...</p>
    </div>
  </div>
);

const App = () => {
  useTelegramWebApp();

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
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
                {/* Catch-all route for 404 pages */}
                <Route path="*" element={<div className="p-4">Page not found</div>} />
              </Routes>
            </main>
            <BottomNav />
          </div>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
