import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Ticket, CreditCard, Music, Youtube, ShieldAlert } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header style={{ marginBottom: '24px', padding: '0', background: 'transparent', boxShadow: 'none' }}>
        <h1 className="header-title" style={{ marginLeft: 0 }}>All Services</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Select an option below</p>
      </header>

      <div className="services-grid">
        <button className="service-card" onClick={() => navigate('/money')}>
          <div className="icon-wrapper">
            <Send size={36} />
          </div>
          <span>Send Money</span>
        </button>

        <button className="service-card" onClick={() => navigate('/ticket')}>
          <div className="icon-wrapper">
            <Ticket size={36} />
          </div>
          <span>Book Ticket</span>
        </button>

        <button className="service-card" onClick={() => navigate('/bill')}>
          <div className="icon-wrapper" style={{ background: '#dcfce7', color: 'var(--success)' }}>
            <CreditCard size={36} />
          </div>
          <span>Pay Bill</span>
        </button>

        <button className="service-card" onClick={() => navigate('/music')}>
          <div className="icon-wrapper" style={{ background: '#fce7f3', color: '#db2777' }}>
            <Music size={36} />
          </div>
          <span>Music</span>
        </button>

        <button className="service-card" onClick={() => navigate('/youtube')}>
          <div className="icon-wrapper" style={{ background: '#fee2e2', color: '#dc2626' }}>
            <Youtube size={36} />
          </div>
          <span>YouTube</span>
        </button>

        <button className="service-card service-emergency" onClick={() => navigate('/emergency')}>
          <div className="icon-wrapper">
            <ShieldAlert size={36} />
          </div>
          <span>Emergency</span>
        </button>
      </div>
    </div>
  );
};

export default Services;
