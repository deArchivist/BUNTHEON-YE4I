import React, { useState, useEffect } from 'react';
import { sendMessage } from '../services/aiService';
import MessageContent from './MessageContent';
// Update the CSS import path to use the styles directory
import '../styles/Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Format all messages for sending to API
      const allMessages = [...messages, userMessage];
      
      // Get formatted response from AI service
      const formattedResponse = await sendMessage(allMessages);
      
      // Add AI response to chat
      setMessages(prevMessages => [
        ...prevMessages, 
        { role: 'assistant', content: formattedResponse }
      ]);
    } catch (error) {
      console.error('Error getting response:', error);
      // Show error message to user
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          role: 'system', 
          content: 'Sorry, there was an error processing your request. Please try again.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}
          >
            <div className="message-header">
              {msg.role === 'user' ? 'You' : 'Mr. Bun Theon'}
            </div>
            
            {/* Here is where we use MessageContent to render formatted messages */}
            <MessageContent content={msg.content} />
          </div>
        ))}
        
        {loading && (
          <div className="message ai-message">
            <div className="message-header">Mr. Bun Theon</div>
            <div className="loading-indicator">
              <span>Thinking</span>
              <span className="dots">...</span>
            </div>
          </div>
        )}
      </div>

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="អ្នកចង់សួរអ្វី? (What would you like to ask?)"
          rows={3}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
