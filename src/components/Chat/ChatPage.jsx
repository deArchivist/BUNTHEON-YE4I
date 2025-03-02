import React from 'react';
import ChatInterface from './ChatInterface';

const ChatPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-primary text-white p-4">
        <h1 className="text-xl font-bold">ជំនួយការ AI</h1>
        <p className="text-sm">ស្នើសុំជំនួយ សួរសំណួរ ឬពិភាក្សាអំពីប្រធានបទណាមួយ</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;
