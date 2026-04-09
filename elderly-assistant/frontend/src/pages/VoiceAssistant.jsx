import React, { useState, useEffect, useRef } from 'react';
import { Mic, Loader2, Volume2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

const VoiceAssistant = () => {
  const [state, setState] = useState('idle'); // idle, listening, processing, speaking
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('Vanakkam! Tap the mic and speak.');
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-IN';

      recognitionRef.current.onstart = () => {
        setState('listening');
        setTranscript('');
      };

      recognitionRef.current.onresult = async (event) => {
        const text = event.results[0][0].transcript;
        setTranscript(`"${text}"`);
        setState('processing');
        await processCommand(text);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setState('idle');
      };

      recognitionRef.current.onend = () => {
        // Only set idle if it was listening but ended without processing
        if (state === 'listening') {
          setState('idle');
        }
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      synthRef.current.cancel(); 
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error(e);
      }
    } else {
      setAiResponse("Sorry, voice is not supported on this browser.");
    }
  };

  const speakText = (text) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    setState('speaking');
    setAiResponse(text);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 0.9;
    
    utterance.onend = () => {
      setState('idle');
    };
    
    synthRef.current.speak(utterance);
  };

  const processCommand = async (text) => {
    const lowerText = text.toLowerCase();
    
    // Internal quick navigation
    if (lowerText.includes('money')) { speakText('Opening Send Money screen.'); navigate('/money'); return; }
    if (lowerText.includes('ticket')) { speakText('Opening Ticket Booking.'); navigate('/ticket'); return; }
    if (lowerText.includes('bill')) { speakText('Opening Bill Payment.'); navigate('/bill'); return; }
    if (lowerText.includes('music') || lowerText.includes('song')) { speakText('Opening Music Player.'); navigate('/music'); return; }
    if (lowerText.includes('youtube') || lowerText.includes('video')) { speakText('Opening YouTube.'); navigate('/youtube'); return; }
    if (lowerText.includes('emergency') || lowerText.includes('help')) { speakText('Activating Emergency Alert.'); navigate('/emergency'); return; }

    try {
      const response = await axios.post(`${API_URL}/chat`, { message: text });
      const reply = response.data.reply;
      speakText(reply);
    } catch (error) {
      console.error(error);
      speakText('Sorry, I am offline right now. Please check your connection.');
    }
  };

  return (
    <div className="page-container voice-hero">
      <h1 className="header-title" style={{ fontSize: '36px', marginBottom: '8px' }}>Iyya AI</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Your Personal Assistant</p>
      
      <div className={`mic-wrapper mic-state-${state}`}>
        {state === 'processing' && <div className="loading-spinner"></div>}
        <button 
          className="mic-button" 
          onClick={startListening}
        >
          {state === 'processing' ? <Loader2 size={64} className="animate-spin" /> : 
           state === 'speaking' ? <Volume2 size={64} /> :
           <Mic size={64} />}
        </button>
      </div>

      <div className="transcript-box">
        {state === 'listening' && <p className="user-transcript">Listening...</p>}
        {state === 'processing' && <p className="user-transcript">Thinking...</p>}
        {transcript && state !== 'listening' && <p className="user-transcript">{transcript}</p>}
        
        <p className="ai-response">
          {aiResponse}
        </p>
      </div>
    </div>
  );
};

export default VoiceAssistant;
