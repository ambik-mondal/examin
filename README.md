# 🎓 Examin - Online Examination & Assessment System

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?style=for-the-badge&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini%201.5-8E44AD?style=for-the-badge&logo=google)

---

## 📌 Overview
**Examin** is a secure, enterprise‑grade platform for online assessments.  
Built for schools, universities, and examination authorities, it offers:

- Real‑time **Google Gemini AI question generation**
- **AI Exam & Question Builder**
- **Vision AI defense** with watermarks
- **Automated MCQ grading & leaderboards**
- **Live proctoring violation monitoring**
- **Institution portals & super admin governance**

---

## ✨ Key Features

### 🛡️ Anti‑Cheating & Proctoring
- Independent tracking of **tab switches** & **fullscreen exits**
- Auto‑termination after 3 violations (`isTerminatedForCheating`)
- Real‑time monitoring dashboard with violation badges
- Single active login enforcement
- Fisher‑Yates randomization of questions/options
- Multi‑monitor detection & audio noise flagging
- DevTools debugger detection
- Clipboard poisoning & shortcut blocking

### 🤖 AI Exam Builder
- Instant test creation via Gemini AI (`/api/ai-exam/generate`)
- MCQ generation with correct answers & marks
- Editable question bank with tagging
- Automatic fallback engine for reliability

### 🛡️ Vision AI Security
- Cryptographic exam/session identifiers
- Low‑opacity watermark grid overlay
- OCR‑based AI question detector (`/api/ai-exam/detect`)

### 🏫 Institution & Student Management
- Approved schools directory with exam/student counts
- Superadmin portal for governance
- Automated credential mailer via Gmail SMTP

---

## 🔒 Security
- JWT authentication with RBAC
- Bcrypt password hashing (12 rounds)
- Full proctoring audit trail
- Sanitized inputs via express‑validator

---

## 📂 Project Structure
