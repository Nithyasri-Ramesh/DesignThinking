import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

const VoiceAssistantBar = ({ onVoiceCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [statusText, setStatusText] = useState('Tap mic to speak');
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-IN'; // Indian English to support casual words better

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setStatusText('Listening...');
      };

      recognitionRef.current.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        setStatusText(`You said: "${transcript}"`);
        await handleCommand(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
        setStatusText('Tap mic to speak again');
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        if (statusText === 'Listening...') {
          setStatusText('Tap mic to speak');
        }
      };
    } else {
      setStatusText('Voice not supported on this browser');
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      synthRef.current.cancel(); // Stop talking if currently talking
      try {
        recognitionRef.current.start();
      } catch (e) {
        // Handle case where it's already started
        console.error(e);
      }
    }
  };

  const speakText = (text) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 0.9; // Slightly slower for elderly
    utterance.pitch = 1.0;
    synthRef.current.speak(utterance);
  };

  const handleCommand = async (text) => {
    const lowerText = text.toLowerCase();
    
    // Quick internal navigation rules
    if (lowerText.includes('send money') || lowerText.includes('pay money') || lowerText.includes('transfer')) {
      speakText('Opening money transfer screen.');
      navigate('/money');
      if (onVoiceCommand) onVoiceCommand(text);
      return;
    }
    if (lowerText.includes('ticket') || lowerText.includes('book')) {
      speakText('Opening ticket booking screen.');
      navigate('/ticket');
      if (onVoiceCommand) onVoiceCommand(text);
      return;
    }
    if (lowerText.includes('pay bill') || lowerText.includes('electricity') || lowerText.includes('recharge')) {
      speakText('Opening bill payment screen.');
      navigate('/bill');
      if (onVoiceCommand) onVoiceCommand(text);
      return;
    }
    if (lowerText.includes('help') || lowerText.includes('emergency')) {
      speakText('Emergency shield activated. Sending alert to your family.');
      navigate('/emergency');
      if (onVoiceCommand) onVoiceCommand(text);
      return;
    }
    if (lowerText.includes('entertainment') || lowerText.includes('video') || lowerText.includes('song')) {
      speakText('Opening entertainment screen.');
      navigate('/entertainment');
      if (onVoiceCommand) onVoiceCommand(text);
      return;
    }
    if (lowerText.includes('home') || lowerText.includes('back')) {
      speakText('Going back to home screen.');
      navigate('/');
      if (onVoiceCommand) onVoiceCommand(text);
      return;
    }

    // Call Backend (Gemini API) for conversational guidance
    setStatusText('Thinking...');
    try {
      const response = await axios.post(`${API_URL}/chat`, { message: text });
      const reply = response.data.reply;
      setStatusText('Assistant thinking done.');
      speakText(reply);
      if (onVoiceCommand) onVoiceCommand(text, reply);
    } catch (error) {
      console.error(error);
      const errorMsg = 'Sorry, I could not connect right now. Please try again.';
      speakText(errorMsg);
      setStatusText(errorMsg);
    }
  };

  return (
    <div className="voice-assistant-bar">
      <div className="voice-status">
        {statusText}
      </div>
      <button 
        className={`voice-btn ${isListening ? 'listening' : ''}`}
        onClick={startListening}
        aria-label="Start Voice Command"
      >
        {isListening ? <Volume2 size={40} /> : <Mic size={40} />}
      </button>
    </div>
  );
};

export default VoiceAssistantBar;
