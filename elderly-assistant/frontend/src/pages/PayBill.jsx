import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';

const PayBill = () => {
  const navigate = useNavigate();
  const [consumerNo, setConsumerNo] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div className="page-container" style={{ padding: 0 }}>
      <header>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={32} />
        </button>
        <h1 className="header-title">Pay Bill</h1>
      </header>

      <div style={{ padding: '24px' }}>
        <div className="card">
          {step === 1 && (
            <>
              <label>Consumer Number</label>
              <input 
                type="text" 
                placeholder="e.g. 11223344" 
                value={consumerNo}
                onChange={e => setConsumerNo(e.target.value)}
              />
              
              <button className="btn btn-primary" onClick={() => { if(consumerNo) setStep(2); else alert('Enter Consumer number') }} style={{ marginTop: '16px' }}>
                Check Amount
              </button>
            </>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <h3 style={{ color: 'var(--danger)', fontSize: '36px', marginBottom: '8px' }}>₹1,250</h3>
              <p style={{ fontSize: '20px', marginBottom: '32px' }}>Electricity Bill Due Tomorrow</p>
              
              <button className="btn btn-success" onClick={() => setStep(3)}>
                <CreditCard size={24} /> Pay Now
              </button>
              <button className="btn btn-secondary" onClick={() => setStep(1)} style={{ marginTop: '16px' }}>
                Cancel
              </button>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--success)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', margin: '0 auto 24px', animation: 'wave 2s infinite' }}>✓</div>
              <h2 style={{ color: 'var(--success)' }}>Bill Paid!</h2>
              <p>Your payment was successful.</p>
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

export default PayBill;
