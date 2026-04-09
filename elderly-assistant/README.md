# Elderly Assistant Prototype

An AI-driven mobile web app built specifically for elderly users. It features high contrast, large buttons, and a Voice Assistant powered by Google Gemini and Web Speech API.

## Project Structure
- **/frontend**: React + Vite application containing all the UI and voice logic.
- **/backend**: Express + Node.js application containing the Gemini API integration.

## How to Run

You will need two terminal windows.

### 1. Start the Backend Server
Open a terminal, navigate to the `backend` folder, and run:
```bash
cd backend
# Install dependencies if you haven't yet
npm install
# Start server
node server.js
```
The backend server will run on `http://localhost:5000`

### 2. Start the Frontend Application
Open another terminal, navigate to the `frontend` folder, and run:
```bash
cd frontend
# Install dependencies if you haven't yet
npm install
# Start dev server
npm run dev
```

### Flow & Features
- Check the home screen for all features.
- Tap the microphone button at the bottom to say commands like "Help me", "Send money", "Book ticket", etc. It will automatically navigate you and let the Gemini assistant speak to you.
- Minimalistic buttons and feedback states for success processing paths are included.
