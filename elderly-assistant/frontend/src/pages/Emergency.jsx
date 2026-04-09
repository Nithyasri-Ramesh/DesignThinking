import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

const Emergency = () => {
  const navigate = useNavigate();
  const [alertSent, setAlertSent] = useState(false);

  return (
    <div className="page-container" style={{ padding: 0, backgroundColor: 'var(--danger-glow)' }}>
      <header style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ background: 'white' }}>
          <ArrowLeft size={32} />
        </button>
      </header>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '24px' }}>
        {!alertSent ? (
          <>
            <h2 style={{ fontSize: '36px', color: 'var(--danger)', marginBottom: '40px' }}>Need Help?</h2>
            
            <button 
              className="btn btn-danger"
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                animation: 'pulse 1.5s infinite',
                fontSize: '32px',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={() => setAlertSent(true)}
            >
              <ShieldAlert size={80} style={{ marginBottom: '16px' }} />
              HELP ME
            </button>
            
            <p style={{ marginTop: '40px', fontSize: '22px', color: 'var(--danger-hover)' }}>
              Pressing this sends an SMS to your family immediately.
            </p>
          </>
        ) : (
          <div className="card" style={{ width: '100%', padding: '40px 24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--success)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', margin: '0 auto 24px' }}>✓</div>
            <h2 style={{ color: 'var(--success)', fontSize: '32px' }}>Alert Sent!</h2>
            <p style={{ fontSize: '24px', marginBottom: '32px' }}>Your family members are notified.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Return Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emergency;
