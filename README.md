# 🚀 Force Equals Hiring Challenge – Full Stack Internship Solution

This repository contains solutions for both challenges in the **Force Equals Full Stack Development Internship** hiring challenge:

- ✅ Challenge 1: **Target Account Matching API**
- 🌐 Challenge 2: **LinkedIn Profile Enhancer Chrome Extension**

---

## ✅ Challenge 1: Target Account Matching API

A RESTful API built using Node.js and Express, allowing frontend clients to authenticate, fetch a list of target companies with match scores, and update the targeting status of companies.

### 🔧 Tech Stack
- Node.js
- Express.js
- JSON Web Token (JWT)
- CORS
- Body-parser

### 📦 Installation & Running the Server

```bash
cd backend_api
npm install
npm start
```

### 🔐 API Endpoints

#### 1. `POST /login`
Authenticate and receive a token.
```json
Request Body:
{
  "username": "user1",
  "password": "pass123"
}
```
Returns a JWT token:
```json
{
  "message": "Login successful",
  "token": "<your-token>"
}
```

#### 2. `GET /accounts`
Fetches list of companies. **Requires token**.

**Header:**
```
Authorization: Bearer <your-token>
```

#### 3. `POST /accounts/:id/status`
Update target status of a company.

**Request Body:**
```json
{
  "status": "Target"
}
```

---

## 🌐 Challenge 2: LinkedIn Profile Enhancer Chrome Extension

A browser extension that injects a floating widget into LinkedIn profile pages showing:

- ✅ Company Name (bold)
- 📊 Match Score (progress bar)
- 🟢 Account Status tag

### 🛠 How to Use

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `linkedin_extension` folder
5. Visit any LinkedIn profile URL (e.g., `https://www.linkedin.com/in/xyz`)
6. The widget will appear at the top-right corner

### 📁 Widget Details

- Static JSON data used (can be extended to pull from backend)
- Responsive within 300px width
- Progress bar shows match score (0–100)
- Colored status tag:
  - Green for **Target**
  - Red for **Not Target**

---

## 🧪 Testing the API

You can test the backend using:

### ✅ Postman or curl

**Example curl:**
```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "user1", "password": "pass123"}'
```

**Example header for GET /accounts:**
```
Authorization: Bearer <your-token>
```

---

## 📂 Project Structure

```
Force_Equals_Challenge_Solution/
├── backend_api/
│   ├── server.js
│   └── package.json
├── linkedin_extension/
│   ├── manifest.json
│   └── content.js
└── README.md
```

---

## ✨ Future Enhancements

- 🔌 Connect extension to live API data
- 🗃️ Add database integration for persistent status
- 🎛️ UI toggle in extension using `chrome.storage`

---

Made with 💻 by a passionate developer for the Force Equals internship challenge.
