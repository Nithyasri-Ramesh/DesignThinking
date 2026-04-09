import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Music = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ padding: 0 }}>
      <header>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={32} />
        </button>
        <h1 className="header-title">Music</h1>
      </header>
      
      <div style={{ padding: '24px', flex: 1 }}>
        <p>Your favorite devotional and classic songs.</p>
        
        <iframe 
          style={{ borderRadius: '12px', marginTop: '24px' }} 
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWV1PBrEreY1F?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
        
        <iframe 
          style={{ borderRadius: '12px', marginTop: '24px' }} 
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Music;
