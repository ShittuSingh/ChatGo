# ChatGo ![React](https://img.shields.io/badge/React-18.x-blue) ![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen) ![Express](https://img.shields.io/badge/Express-4.x-yellow) ![OpenAI](https://img.shields.io/badge/OpenAI-API-blue) ![License](https://img.shields.io/badge/license-MIT-blue)

**ChatGo** is a secure, real-time messaging platform providing end-to-end encrypted chats, user authentication, and AI-assisted smart replies. It is built with React.js (frontend), Node.js/Express (backend), and MongoDB (database). ChatGo uses JSON Web Tokens (JWT) for secure signup/login and AES-256/RSA encryption to protect all messages. Key features include private & group chats, instant WebSocket messaging with typing indicators, and secure media/file sharing. An integrated OpenAI API provides context-aware smart reply suggestions. Both the frontend and backend are deployed over HTTPS for full-stack security.

---

## 📌 Live Services

| Service  | URL                                      | Description                       |
|----------|------------------------------------------|-----------------------------------|
| Frontend | [https://chat-go-zeta.vercel.app/](https://chat-go-zeta.vercel.app/) | React client (Vercel, HTTPS) |
| Backend  | [https://chat-go-server.vercel.app/](https://chat-go-server.vercel.app/) | Node/Express API (Vercel, HTTPS) |

---

## 📁 Repository Structure

```
ChatGo/
├── client/       # React frontend application
├── server/       # Node.js/Express backend API
├── .env.example  # Sample environment variables
└── README.md     # This documentation file
```

---

## 🛠 Tech Stack

| Component        | Technology                                 |
|------------------|--------------------------------------------|
| **Frontend**     | React.js, Tailwind CSS                     |
| **Backend**      | Node.js, Express.js                        |
| **Database**     | MongoDB (MongoDB Atlas)                    |
| **Authentication** | JSON Web Tokens (JWT)                     |
| **Encryption**   | AES-256 & RSA (end-to-end encryption)      |
| **AI Integration** | OpenAI API (GPT)                         |
| **Real-Time**    | WebSockets (Socket.IO)                     |
| **Deployment**   | Vercel (Frontend & Backend over HTTPS)     |

---

## 🧩 Architecture Diagram

```
+---------------+       +----------------+       +-------------+
| React Frontend| <----> | Node/Express  | <----> | MongoDB     |
|  (client)     |  WS/   |   Backend     |  DB    | (database)  |
+---------------+ HTTP  +----------------+       +-------------+
        |                     |   |    
        |                     |   +--> JSON Web Tokens (JWT)
        |                     |
        |                     +--> OpenAI API (smart replies)
        |
        +--> AES-256/RSA (end-to-end encrypted chats)
```

---

## 🚀 Features

- 🔐 **Secure Authentication** (JWT)
- 🛡️ **End-to-End Message Encryption** (AES-256 / RSA)
- 💬 **Real-Time Messaging** with WebSockets
- ✨ **Smart AI Replies** via OpenAI integration
- 👤 **User Presence and Typing Indicators**
- 📎 **Encrypted Media & File Sharing**
- 👥 **Private and Group Chats**
- ☁️ **Fully Deployed Over HTTPS**

---

## 📡 API Endpoints

| Endpoint                  | Method | Description                                 | Access        |
|---------------------------|--------|---------------------------------------------|---------------|
| `/api/auth/signup`        | POST   | Register a new user                         | Public        |
| `/api/auth/login`         | POST   | Authenticate and return JWT                 | Public        |
| `/api/messages/send`      | POST   | Send an encrypted message                   | Authenticated |
| `/api/messages/:chatId`   | GET    | Get encrypted messages in a chat            | Authenticated |
| `/api/users`              | GET    | Get list of registered users                | Authenticated |
| `/api/chats/create`       | POST   | Create new chat (private/group)             | Authenticated |
| `/api/messages/:id`       | DELETE | Delete a message (sender or admin only)     | Authenticated |
| `/api/ai/suggest`         | POST   | Generate AI-assisted reply using OpenAI     | Authenticated |

---

## ⚙️ Local Development

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ShittuSingh/ChatGo.git
cd ChatGo
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chatgo
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

Start server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
cp .env.example .env
```

Edit `.env`:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start client:

```bash
npm start
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000

---

Enjoy using **ChatGo** 🚀 – Secure, AI-powered, real-time chat at your fingertips.
