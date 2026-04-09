import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const Entertainment = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={32} /> Back
        </button>
        <h1>Entertainment</h1>
        <div style={{ width: 50 }}></div>
      </header>

      <div className="card" style={{ marginTop: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Old Tamil Songs</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <PlayCircle size={28} /> MS Viswanathan Hits
          </button>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <PlayCircle size={28} /> Ilayaraja Classics
          </button>
          <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}>
            <PlayCircle size={28} /> Devotional Songs
          </button>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '16px' }}>Comedy & Drama</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          <button className="btn-primary" style={{ backgroundColor: '#8b5cf6', justifyContent: 'flex-start' }}>
            <PlayCircle size={28} /> Vadivelu Comedy
          </button>
          <button className="btn-primary" style={{ backgroundColor: '#8b5cf6', justifyContent: 'flex-start' }}>
            <PlayCircle size={28} /> Sivaji Ganesan Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
