import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { sendMessage } from '../../services/aiService';

const ChatInterface = () => {
  const { currentPrompt, setCurrentPrompt } = useContext(AppContext);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'សួស្តី! ខ្ញុំអាចជួយអ្វីអ្នកបាន?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize with current prompt if available
  useEffect(() => {
    if (currentPrompt) {
      setInput(currentPrompt.content);
      // Clear the current prompt once it's loaded
      setCurrentPrompt(null);
    }
  }, [currentPrompt, setCurrentPrompt]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const allMessages = [...messages, userMessage];
      const response = await sendMessage(allMessages);
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'មានបញ្ហាក្នុងការទទួលបានការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។',
        error: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`${
              message.role === 'user' 
                ? 'bg-primary text-white ml-auto' 
                : message.error 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-gray-100'
            } rounded-lg p-3 max-w-[80%] ${message.role === 'user' ? 'ml-auto' : 'mr-auto'}`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] mr-auto animate-pulse">
            កំពុងវាយ...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="border-t p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="pixel-input flex-1 rounded-md"
          placeholder="សរសេរសំណួររបស់អ្នកនៅទីនេះ..."
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={isLoading || !input.trim()}
        >
          ផ្ញើ
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
