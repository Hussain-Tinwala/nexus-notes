# 🚀 Nexus Notes

**Nexus Notes** is a high-performance **full-stack MERN application** designed for modern production environments.
It delivers fast note management with a **React frontend** and a **Node.js/Express backend**, secured using **Upstash Redis rate-limiting** and optimized through a **unified production build pipeline**.

---

# 🌟 Features

### 📝 Full CRUD Notes

Create, read, update, and delete notes with seamless **real-time UI updates**.

### 🔐 Security-First Architecture

Integrated **Redis-based rate limiting** using Upstash to prevent:

* API abuse
* Brute-force requests
* Database spamming

### ⚡ Production Optimized

Frontend is compiled using **Vite** and bundled into a **minified dist build**, which is served directly by Express.

### 📱 Fully Responsive UI

Built with **Tailwind CSS + DaisyUI** to deliver a clean, modern **Nexus-style interface** across devices.

### 🔔 Global Notifications

Uses **React Hot Toast** to give instant feedback for user actions.

---

# 🛠️ Tech Stack

## Frontend

* **React 19**
* **Vite**
* **Axios**
* **Tailwind CSS**
* **DaisyUI**
* **Lucide React**
* **React Hot Toast**

## Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Upstash Redis**
* **Dotenv**

---

# 🏗️ Project Architecture

One of the highlights of this project is the **Unified Production Build System**.

Instead of running two separate servers, the frontend is compiled and served by the backend.

### Development Mode

| Service                | Port |
| ---------------------- | ---- |
| Frontend (Vite)        | 5173 |
| Backend (Node/Express) | 5001 |

Features:

* Hot Module Reloading
* Fast development cycle

### Production Mode

1. Vite builds the React app
2. Output is generated inside `/dist`
3. Express serves static files using:

```js
app.use(express.static(path.join(__dirname, "../frontend/dist")));
```

This allows the entire application to run on **a single domain**.

---

# 🚦 Security Implementation

To protect the API from abuse, Nexus Notes uses a **Sliding Window Rate Limiter** powered by **Upstash Redis**.

### How it Works

* Each request is tracked using the **user's IP address**
* Requests are counted within a **time window**
* If the limit is exceeded, the API temporarily blocks further requests

### Benefits

✔ Prevents brute-force attacks
✔ Reduces database load
✔ Protects against automated bots

---

# 📂 Project Structure

```
nexus-notes
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── main.jsx
│
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Hussain-Tinwala/nexus-notes.git
cd nexus-notes
```

---

## 2️⃣ Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# ⚙️ Environment Variables

Create a **.env file inside the backend folder**

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
NODE_ENV=development
```

⚠️ Make sure `.env` is added to **.gitignore**

---

# ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Now open:

```
http://localhost:5173
```

---

# 🧪 Production Build

To generate the optimized production build:

```bash
cd frontend
npm run build
```

This creates a **minified build in `/dist`**, which the Express server serves in production.

---

# 📦 Deployment

The application can be deployed easily on platforms like:

* **Render**
* **Railway**
* **Vercel (frontend only)**
* **DigitalOcean**

For full-stack deployment, hosting both backend and frontend on **Render** is recommended.

---
