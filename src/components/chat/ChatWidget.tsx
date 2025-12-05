'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useFinnoAQChat } from '../../hooks/useFinnoAQChat';
import ReactMarkdown from 'react-markdown';
import './ChatWidget.scss';

export default function ChatWidget() {
  const { 
    startChat, 
    sendMessage, 
    endChat, 
    messages, 
    loading, 
    error, 
    isConnected 
  } = useFinnoAQChat();
  
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [userForm, setUserForm] = useState({
    name: '',
    phone: '',
    location: '',
    farm_size: '',
    crops: ''
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userForm.name || !userForm.phone) return;
    
    await startChat({
      ...userForm,
      crops: userForm.crops ? userForm.crops.split(',').map(c => c.trim()) : []
    });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    const msg = input;
    setInput('');
    await sendMessage(msg);
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="finno-chat-widget">
      {!isOpen && (
        <button className="finno-chat-widget__toggle" onClick={toggleChat}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="finno-chat-widget__container">
          <div className="finno-chat-widget__header">
            <div className="header-info">
              <div className="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="title">
                <h3>FinnoAQ Assistant</h3>
                <span>#MADEWITHAI</span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>&times;</button>
          </div>

          {!isConnected ? (
            <div className="finno-chat-widget__registration">
              <h3>Welcome Farmer! 🌾</h3>
              <p>Please provide your details to start chatting with our AgriTech expert.</p>
              <form onSubmit={handleStartChat}>
                <div className="form-group">
                  <label>Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={userForm.name}
                    onChange={e => setUserForm({...userForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    value={userForm.phone}
                    onChange={e => setUserForm({...userForm, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Crops (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Wheat, Rice"
                    value={userForm.crops}
                    onChange={e => setUserForm({...userForm, crops: e.target.value})}
                  />
                </div>
                {error && <div style={{color: 'red', fontSize: '12px', marginBottom: '10px'}}>{error}</div>}
                <button type="submit" disabled={loading}>
                  {loading ? 'Starting...' : 'Start Chat'}
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="finno-chat-widget__messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`finno-chat-widget__message finno-chat-widget__message--${msg.role}`}>
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="sources">
                        Sources: {msg.sources.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="finno-chat-widget__message finno-chat-widget__message--assistant">
                    Typing...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="finno-chat-widget__input-area">
                <form onSubmit={handleSendMessage}>
                  <input 
                    type="text" 
                    placeholder="Type your question..." 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={loading}
                  />
                  <button type="submit" disabled={loading || !input.trim()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </form>
                <div className="footer-label">Direct Message</div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
