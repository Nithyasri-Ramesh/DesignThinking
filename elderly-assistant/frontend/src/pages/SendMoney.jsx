import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

const SendMoney = () => {
  const navigate = useNavigate();
  const [upi, setUpi] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSend = () => {
    if (!upi || !amount) {
      alert('Please enter UPI ID and amount');
      return;
    }
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="page-container" style={{ padding: 0 }}>
      <header>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={32} />
        </button>
        <h1 className="header-title">Send Money</h1>
      </header>

      <div style={{ padding: '24px' }}>
        <div className="card">
          {status === 'idle' && (
            <>
              <label>Receiver Number / UPI ID</label>
              <input 
                type="text" 
                placeholder="e.g. 9876543210" 
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
              />

              <label>Amount (₹)</label>
              <input 
                type="number" 
                placeholder="e.g. 500" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <button className="btn btn-primary" onClick={handleSend} style={{ marginTop: '16px' }}>
                <Send size={24} /> Send Money
              </button>
            </>
          )}

          {status === 'processing' && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="loading-spinner" style={{ position: 'relative', width: '64px', height: '64px', margin: '0 auto 24px', animation: 'spin 1s linear infinite', border: '6px solid rgba(0,0,0,0.1)', borderTopColor: 'var(--primary)', borderRadius: '50%' }}></div>
              <h2>Processing...</h2>
              <p>Please wait securely.</p>
            </div>
          )}

          {status === 'success' && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--success)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', margin: '0 auto 24px', animation: 'wave 2s infinite' }}>✓</div>
              <h2 style={{ color: 'var(--success)' }}>Money Sent!</h2>
              <p>₹{amount} delivered successfully.</p>
              <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ marginTop: '24px' }}>
                Go to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
