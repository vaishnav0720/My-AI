# AI-GENERATE

## Description
- A minimal full‑stack app that reviews code snippets using Google Gemini.
- Frontend is a React + Vite app with a code editor and markdown renderer.
- Backend is an Express server exposing a single review endpoint.

## Project Structure
```
AI-GENERATE/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  └─ ai.controller.js
│  │  ├─ routes/
│  │  │  └─ ai.routes.js
│  │  ├─ services/
│  │  │  └─ ai.service.js
│  │  └─ app.js
│  ├─ server.js
│  ├─ package.json
│  └─ .env (ignored)
├─ frontend/
│  ├─ src/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ assets/
│  ├─ index.html
│  ├─ vite.config.js
│  └─ package.json
└─ README.md
```

## Demo
- Start backend: `cd backend && npm start` (http://localhost:3000)
- Start frontend: `cd frontend && npm run dev` (http://localhost:5173)
- In the app:
  - Edit the code in the left editor
  - Click `Review`
  - The right panel displays a markdown review
