import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Ticket, CreditCard, ShieldAlert, Tv, MessageSquare } from 'lucide-react';

const Home = ({ chatHistory }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <h1>Welcome, Iyya</h1>
      </header>

      <div className="grid">
        <button className="btn-primary" onClick={() => navigate('/money')}>
          <Send size={32} />
          Send Money
        </button>

        <button className="btn-secondary" onClick={() => navigate('/ticket')}>
          <Ticket size={32} />
          Book Ticket
        </button>

        <button className="btn-success" onClick={() => navigate('/bill')}>
          <CreditCard size={32} />
          Pay Bill
        </button>

        <button className="btn-primary" style={{ backgroundColor: '#8b5cf6' }} onClick={() => navigate('/entertainment')}>
          <Tv size={32} />
          Entertainment
        </button>

        <button className="btn-danger" onClick={() => navigate('/emergency')}>
          <ShieldAlert size={32} />
          Emergency / Help
        </button>
      </div>

      <div className="card" style={{ marginTop: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--primary)' }}>
          <MessageSquare size={28} /> Voice Assistant History
        </h2>
        <div className="chat-window" style={{ marginBottom: 0 }}>
          {chatHistory.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>Tap the mic below and ask me anything! Example: "Vanakkam, I want to send money."</p>
          ) : (
            chatHistory.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
