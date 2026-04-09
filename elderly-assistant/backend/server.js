const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: `You are an AI assistant helping an elderly user with a mobile app. 
The app has these capabilities: Send Money, Book Ticket, Pay Bill, Emergency, Music, YouTube.
Respond in very simple, friendly language. Keep it extremely brief (1-3 sentences). 
Always start your first response or greeting with "Vanakkam! " 
Your goal is to guide them gently. If they say a command, confirm what you are about to do.`
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    const result = await model.generateContent(message);
    const responseText = result.response.text();
    
    res.json({ reply: responseText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ reply: "I am having some trouble thinking right now. Please try again." });
  }
});

// Mock APIS for demonstration
app.post('/api/payment', (req, res) => {
  res.json({ success: true, message: "Payment processed successfully." });
});

app.post('/api/booking', (req, res) => {
  res.json({ success: true, message: "Ticket booked successfully." });
});

app.post('/api/voice-command', (req, res) => {
  // Voice commands are currently handled on the frontend via speech recognition
  res.json({ status: 'ok' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

