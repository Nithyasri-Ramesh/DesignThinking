import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VoiceAssistant from './pages/VoiceAssistant';
import Chat from './pages/Chat';
import Services from './pages/Services';
import SendMoney from './pages/SendMoney';
import BookTicket from './pages/BookTicket';
import PayBill from './pages/PayBill';
import Emergency from './pages/Emergency';
import Music from './pages/Music';
import YouTube from './pages/YouTube';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoiceAssistant />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/money" element={<SendMoney />} />
        <Route path="/ticket" element={<BookTicket />} />
        <Route path="/bill" element={<PayBill />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/music" element={<Music />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
