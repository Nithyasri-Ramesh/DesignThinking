import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mic, MessageSquare, LayoutGrid, AlertCircle } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (['/music', '/youtube', '/money', '/ticket', '/bill'].includes(location.pathname)) {
    return null; // hide on specific sub-pages if we want, or keep it. Let's keep it everywhere except maybe emergency.
  }

  return (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        onClick={() => navigate('/')}
      >
        <Mic size={32} />
        <span>Voice</span>
      </button>
      
      <button 
        className={`nav-item ${location.pathname === '/chat' ? 'active' : ''}`}
        onClick={() => navigate('/chat')}
      >
        <MessageSquare size={32} />
        <span>Chat</span>
      </button>
      
      <button 
        className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}
        onClick={() => navigate('/services')}
      >
        <LayoutGrid size={32} />
        <span>Services</span>
      </button>

      <button 
        className={`nav-item`}
        onClick={() => navigate('/emergency')}
        style={{ color: 'var(--danger)' }}
      >
        <AlertCircle size={32} />
        <span>Help</span>
      </button>
    </div>
  );
};

export default BottomNav;
