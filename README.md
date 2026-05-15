# ⚡ Electronics Hobby Club (EHC) Website

Welcome to the official repository of the **Electronics Hobby Club (EHC)** at **NIST University**.  
This project is a modern, responsive web platform built to showcase club activities, projects, events, and team members.

🔗 **Live Demo:** *https://ehc-nist.netlify.app*

---

## ✨ Features

- 🚀 **Animated Project Showcase** Smooth, auto-playing project carousel built using Framer Motion.
- 📸 **Dynamic Gallery** Optimized image grid with smooth scrolling and dynamic layout.
- 📅 **Event Management Section** Displays upcoming and past events with conditional registration options.
- 👥 **Team Directory** Organized display of mentors, core members, and batches.
- 📡 **Contact Form (Serverless)** Sends messages directly to Google Forms / Sheets without a backend.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Data Handling:** Google Forms API (Serverless)

---

## 📂 Folder Structure

```text
src/
├── assets/             # Images, logos, posters
├── components/         # Navbar, Footer, reusable UI
├── lib/                # Utility functions
├── pages/
│   ├── Home.jsx
│   ├── Events.jsx
│   ├── Gallery.jsx
│   ├── Team.jsx
│   └── Contact.jsx
├── App.jsx             # Routing setup
└── index.css           # Global styles




🚀 Getting Started
Follow these steps to run the project locally on your machine.

1. Clone Repository
Bash
git clone [https://github.com/Antaryami-044/EHC.git](https://github.com/Antaryami-044/EHC.git)
cd EHC
2. Install Dependencies
Bash
npm install
3. Run Development Server
Bash
npm run dev
Open in your browser: 👉 http://localhost:5173 or http://localhost:3000

4. Build for Production
Bash
npm run build
5. Preview Build
Bash
npm run preview
