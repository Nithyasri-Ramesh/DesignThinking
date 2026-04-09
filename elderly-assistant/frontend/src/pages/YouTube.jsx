import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const YouTube = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ padding: 0 }}>
      <header>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={32} />
        </button>
        <h1 className="header-title">YouTube</h1>
      </header>

      <div style={{ padding: '24px', flex: 1 }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Comedy Clips</h2>
        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '32px' }}>
          <iframe 
            width="100%" 
            height="250" 
            src="https://www.youtube.com/embed/4b42h5nE_jA" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>

        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>News</h2>
        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <iframe 
            width="100%" 
            height="250" 
            src="https://www.youtube.com/embed/tS1u0o8R8dM" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
