import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Vanakkam! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/chat`, { message: userMsg });
      setMessages(prev => [...prev, { role: 'bot', text: response.data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I got disconnected. Please re-check connection.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <header>
        <h1 className="header-title">Chat with Ask me</h1>
      </header>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.role}`}>
              {msg.text}
            </div>
        ))}
        {isLoading && (
          <div className="chat-bubble bot">
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>typing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input 
          className="chat-input"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="chat-send-btn" onClick={handleSend}>
          {input.trim() ? <Send size={24} /> : <Mic size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Chat;
