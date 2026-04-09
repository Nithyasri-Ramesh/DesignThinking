import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Ticket } from 'lucide-react';

const BookTicket = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div className="page-container" style={{ padding: 0 }}>
      <header>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={32} />
        </button>
        <h1 className="header-title">Book Ticket</h1>
      </header>

      <div style={{ padding: '24px' }}>
        <div className="card">
          {step === 1 && (
            <>
              <label>From</label>
              <input type="text" placeholder="e.g. Chennai" value={from} onChange={e => setFrom(e.target.value)} />
              
              <label>To</label>
              <input type="text" placeholder="e.g. Madurai" value={to} onChange={e => setTo(e.target.value)} />
              
              <label>Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} />
              
              <button className="btn btn-primary" onClick={() => { if(from&&to&&date) setStep(2); else alert('Fill all details'); }} style={{ marginTop: '16px' }}>
                Find Tickets
              </button>
            </>
          )}

          {step === 2 && (
            <div>
              <h3>Available Trains:</h3>
              <div style={{ border: '2px solid var(--primary-light)', borderRadius: '12px', padding: '16px', margin: '24px 0', background: 'var(--bg-main)' }}>
                <h4 style={{ fontSize: '22px', marginBottom: '8px' }}>Superfast Express</h4>
                <p style={{ margin: 0 }}>10:00 AM • ₹450</p>
                <button className="btn btn-primary" onClick={() => setStep(3)} style={{ marginTop: '16px' }}>
                  <Ticket size={24} /> Book This
                </button>
              </div>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--success)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', margin: '0 auto 24px', animation: 'wave 2s infinite' }}>✓</div>
              <h2 style={{ color: 'var(--success)' }}>Booking Confirmed!</h2>
              <p>Your ticket is booked.</p>
              <button className="btn btn-primary" onClick={() => navigate('/')} style={{ marginTop: '32px' }}>
                Go to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
