# FinnoAQ AgriTech Bot - API Documentation

> **✅ TESTED & VERIFIED** - All endpoints tested on December 5, 2025

## Overview

RESTful API service for the FinnoAQ agricultural chatbot. This API allows frontend applications to interact with the AI-powered agricultural assistant.

| Info | Details |
|------|---------|
| **Base URL** | `http://your-server:8000` |
| **Swagger UI** | `http://your-server:8000/docs` |
| **ReDoc** | `http://your-server:8000/redoc` |
| **Content-Type** | `application/json` |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND                                  │
│  (React / Next.js / Vue / Mobile App)                           │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTP/REST
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FASTAPI BACKEND                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Session   │  │    Chat     │  │     Query Logger        │  │
│  │   Manager   │  │   Handler   │  │   (Save Unanswered)     │  │
│  └─────────────┘  └──────┬──────┘  └─────────────────────────┘  │
│                          │                                       │
│                          ▼                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              LangChain + Gemini 2.5 Flash                │   │
│  │   ┌────────────────┐    ┌───────────────────────────┐    │   │
│  │   │  ChromaDB      │    │  ConversationBufferMemory │    │   │
│  │   │  (3 chunks)    │    │  (Per Session)            │    │   │
│  │   └────────────────┘    └───────────────────────────┘    │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Quick Start

### 1. Install Dependencies
```bash
cd data_manager_agent
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Set Environment Variables
Create a `.env` file:
```env
GOOGLE_API_KEY=your_google_api_key_here
LANGCHAIN_API_KEY=optional_langsmith_key
```

### 3. Run the Server
```bash
# Activate virtual environment first
source venv/bin/activate

# Development (with auto-reload)
uvicorn api:app --reload --host 0.0.0.0 --port 8000

# Production
uvicorn api:app --host 0.0.0.0 --port 8000 --workers 4
```

### 4. Access API Docs
Open `http://localhost:8000/docs` in your browser for interactive Swagger documentation.

---

## Endpoints

### 1. Health Check

Check if the API is running.

```
GET /api/v1/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-05T16:30:00.000000",
  "sessions_active": 3
}
```

---

### 2. Start Session

Initialize a new chat session with user details.

```
POST /api/v1/session/start
```

**Request Body:**
```json
{
  "user": {
    "name": "Ramesh Kumar",
    "phone": "+91-9876543210",
    "location": "Punjab",
    "farm_size": "5 acres",
    "crops": ["wheat", "rice"]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user.name` | string | ✅ Yes | User's name |
| `user.phone` | string | ✅ Yes | User's phone number |
| `user.location` | string | ❌ No | State/District |
| `user.farm_size` | string | ❌ No | Farm size (e.g., "5 acres") |
| `user.crops` | array | ❌ No | List of crops grown |

**Response:**
```json
{
  "success": true,
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "message": "Session started successfully",
  "welcome_message": "🌾 Namaste Ramesh Kumar! I'm from the FinnoAQ team. How can I help with your wheat today?"
}
```

> ⚠️ **Important:** Save the `session_id` - you need it for all subsequent requests!

---

### 3. Send Chat Message

Send a message and get AI response.

```
POST /api/v1/chat
```

**Request Body:**
```json
{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "message": "How to control pests in wheat crops?"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `session_id` | string | ✅ Yes | Session ID from `/session/start` |
| `message` | string | ✅ Yes | User's message/question |

**Response:**
```json
{
  "success": true,
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "answer": "For controlling pests in wheat crops, you can use integrated pest management (IPM) techniques...",
  "is_unanswered": false,
  "sources": ["agritech.txt"],
  "category": "pest_management"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `answer` | string | AI-generated response |
| `is_unanswered` | boolean | `true` if bot couldn't answer from knowledge base |
| `sources` | array | Documents used to generate the answer |
| `category` | string | Auto-detected category (after 2+ messages) |

**Categories:**
- `pest_management`
- `crop_cultivation`
- `soil_health`
- `weather`
- `market_prices`
- `irrigation`
- `livestock`
- `government_schemes`
- `technology`
- `general_agriculture`

---

### 4. End Session

Close the session and save logs.

```
POST /api/v1/session/end
```

**Request Body:**
```json
{
  "session_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Response:**
```json
{
  "success": true,
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "message": "Session ended. 2 question(s) logged for expert follow-up.",
  "unanswered_count": 2,
  "follow_up_required": true
}
```

---

### 5. Get All Queries (Admin)

Get all saved queries that need follow-up.

```
GET /api/v1/queries
```

**Response:**
```json
[
  {
    "query_id": "QRY_20251205_163000",
    "timestamp": "2025-12-05T16:30:00.000000",
    "user_name": "Ramesh Kumar",
    "user_phone": "+91-9876543210",
    "unanswered_count": 2,
    "category": "pest_management",
    "follow_up_required": true
  }
]
```

---

### 6. Get Query by ID (Admin)

Get full details of a specific query.

```
GET /api/v1/queries/{query_id}
```

**Example:** `GET /api/v1/queries/QRY_20251205_163000`

**Response:**
```json
{
  "query_id": "QRY_20251205_163000",
  "timestamp": "2025-12-05T16:30:00.000000",
  "user": {
    "name": "Ramesh Kumar",
    "phone": "+91-9876543210",
    "location": "Punjab",
    "farm_size": "5 acres",
    "crops": ["wheat", "rice"]
  },
  "unanswered_queries": [
    {
      "question": "What about a specific pest called XYZ?",
      "bot_response": "I don't have specific information about...",
      "reason": "Requires expert consultation"
    }
  ],
  "summary": "Farmer asked 3 question(s)...",
  "category": "pest_management",
  "follow_up_required": true,
  "status": "completed",
  "end_timestamp": "2025-12-05T16:45:00.000000"
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "detail": "Error message here"
}
```

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request - Invalid input |
| `404` | Not Found - Session or query not found |
| `500` | Internal Server Error |
| `503` | Service Unavailable - Server starting up |

---

## Frontend Integration Examples

### Complete Flow Diagram

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           USER FLOW                                       │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  1. USER REGISTRATION FORM                                                │
│     ┌─────────────────────────────────┐                                   │
│     │  Name: [Ramesh Kumar        ]   │                                   │
│     │  Phone: [9876543210         ]   │                                   │
│     │  Location: [Punjab          ]   │                                   │
│     │  Farm Size: [5 acres        ]   │                                   │
│     │  Crops: [wheat, rice        ]   │                                   │
│     │  [Start Chat]                   │                                   │
│     └─────────────────────────────────┘                                   │
│                     │                                                     │
│                     ▼ POST /session/start                                 │
│                                                                           │
│  2. CHAT INTERFACE                                                        │
│     ┌─────────────────────────────────┐                                   │
│     │ 🤖: Namaste Ramesh! How can I   │                                   │
│     │     help with your wheat today? │                                   │
│     │                                 │                                   │
│     │ 👤: How to control pests?       │ ──► POST /chat                    │
│     │                                 │                                   │
│     │ 🤖: For pest control...         │ ◄── Response                      │
│     │     [sources: agritech.txt]     │                                   │
│     │                                 │                                   │
│     │ 👤: What about XYZ disease?     │ ──► POST /chat                    │
│     │                                 │                                   │
│     │ 🤖: I don't have info about...  │ ◄── is_unanswered: true           │
│     │     Download FinnoAQ app!       │                                   │
│     └─────────────────────────────────┘                                   │
│                     │                                                     │
│                     ▼ POST /session/end                                   │
│                                                                           │
│  3. SESSION ENDED                                                         │
│     ┌─────────────────────────────────┐                                   │
│     │ ✅ Chat ended                   │                                   │
│     │ 📝 2 questions logged for       │                                   │
│     │    expert follow-up             │                                   │
│     └─────────────────────────────────┘                                   │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘
```

---

### JavaScript/TypeScript - API Client Class

```javascript
/**
 * FinnoAQ AgriTech Bot API Client
 * Complete implementation for frontend integration
 */
class FinnoAQClient {
  constructor(baseUrl = 'http://localhost:8000/api/v1') {
    this.baseUrl = baseUrl;
    this.sessionId = null;
  }

  /**
   * Check if API is healthy
   */
  async healthCheck() {
    const response = await fetch(`${this.baseUrl}/health`);
    return response.json();
  }

  /**
   * Start a new chat session
   * @param {Object} userInfo - User details
   * @returns {Promise<Object>} Session data with session_id
   */
  async startSession(userInfo) {
    const response = await fetch(`${this.baseUrl}/session/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: userInfo })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to start session');
    }
    
    const data = await response.json();
    this.sessionId = data.session_id;
    return data;
  }

  /**
   * Send a chat message
   * @param {string} message - User's message
   * @returns {Promise<Object>} AI response
   */
  async sendMessage(message) {
    if (!this.sessionId) {
      throw new Error('No active session. Call startSession() first.');
    }

    const response = await fetch(`${this.baseUrl}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: this.sessionId,
        message: message
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to send message');
    }
    
    return response.json();
  }

  /**
   * End the current session
   * @returns {Promise<Object>} Session summary
   */
  async endSession() {
    if (!this.sessionId) {
      throw new Error('No active session');
    }

    const response = await fetch(`${this.baseUrl}/session/end`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: this.sessionId })
    });
    
    const data = await response.json();
    this.sessionId = null;
    return data;
  }

  /**
   * Get all saved queries (Admin)
   */
  async getAllQueries() {
    const response = await fetch(`${this.baseUrl}/queries`);
    return response.json();
  }

  /**
   * Get a specific query by ID (Admin)
   */
  async getQueryById(queryId) {
    const response = await fetch(`${this.baseUrl}/queries/${queryId}`);
    if (!response.ok) {
      throw new Error('Query not found');
    }
    return response.json();
  }
}

// ============ USAGE EXAMPLE ============
async function runChatDemo() {
  const client = new FinnoAQClient('http://localhost:8000/api/v1');
  
  try {
    // 1. Start session
    const session = await client.startSession({
      name: 'Ramesh Kumar',
      phone: '9876543210',
      location: 'Punjab',
      farm_size: '5 acres',
      crops: ['wheat', 'rice']
    });
    console.log('Welcome:', session.welcome_message);
    
    // 2. Chat
    const response1 = await client.sendMessage('How to control pests in wheat?');
    console.log('Bot:', response1.answer);
    console.log('Was answered:', !response1.is_unanswered);
    
    const response2 = await client.sendMessage('What about tea farming?');
    console.log('Bot:', response2.answer);
    
    // 3. End session
    const summary = await client.endSession();
    console.log('Unanswered questions:', summary.unanswered_count);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

runChatDemo();
```

---

### React Complete Implementation

```jsx
// ============ hooks/useFinnoAQChat.js ============
import { useState, useCallback, useRef } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

export function useFinnoAQChat() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Start a new chat session
  const startChat = useCallback(async (userInfo) => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`${API_BASE}/session/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: userInfo })
      });
      
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || 'Failed to start session');
      }
      
      const data = await res.json();
      setSessionId(data.session_id);
      setIsConnected(true);
      setMessages([{ 
        id: Date.now(),
        role: 'assistant', 
        content: data.welcome_message,
        timestamp: new Date().toISOString()
      }]);
      
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Send a message
  const sendMessage = useCallback(async (message) => {
    if (!sessionId) {
      setError('No active session');
      return null;
    }
    
    // Add user message immediately for better UX
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message })
      });
      
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || 'Failed to send message');
      }
      
      const data = await res.json();
      
      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.answer,
        isUnanswered: data.is_unanswered,
        sources: data.sources,
        category: data.category,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMessage]);
      
      return data;
    } catch (err) {
      setError(err.message);
      // Remove the user message if failed
      setMessages(prev => prev.filter(m => m.id !== userMessage.id));
      throw err;
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  // End the chat session
  const endChat = useCallback(async () => {
    if (!sessionId) return null;
    
    setLoading(true);
    
    try {
      const res = await fetch(`${API_BASE}/session/end`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId })
      });
      
      const data = await res.json();
      setSessionId(null);
      setIsConnected(false);
      
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  // Reset everything
  const reset = useCallback(() => {
    setSessionId(null);
    setMessages([]);
    setError(null);
    setIsConnected(false);
  }, []);

  return { 
    startChat, 
    sendMessage, 
    endChat, 
    reset,
    messages, 
    loading, 
    error,
    sessionId,
    isConnected 
  };
}


// ============ components/ChatWidget.jsx ============
import React, { useState, useRef, useEffect } from 'react';
import { useFinnoAQChat } from '../hooks/useFinnoAQChat';

export function ChatWidget() {
  const { 
    startChat, 
    sendMessage, 
    endChat, 
    messages, 
    loading, 
    error,
    isConnected 
  } = useFinnoAQChat();
  
  const [input, setInput] = useState('');
  const [userForm, setUserForm] = useState({
    name: '',
    phone: '',
    location: '',
    farm_size: '',
    crops: ''
  });
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle form submission to start chat
  const handleStartChat = async (e) => {
    e.preventDefault();
    try {
      await startChat({
        ...userForm,
        crops: userForm.crops.split(',').map(c => c.trim()).filter(Boolean)
      });
    } catch (err) {
      console.error('Failed to start chat:', err);
    }
  };

  // Handle sending a message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    const message = input;
    setInput('');
    
    try {
      await sendMessage(message);
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  // Registration Form (shown before chat starts)
  if (!isConnected) {
    return (
      <div className="chat-widget registration">
        <h2>🌾 FinnoAQ AgriTech Assistant</h2>
        <p>Please provide your details to start chatting</p>
        
        <form onSubmit={handleStartChat}>
          <input
            type="text"
            placeholder="Your Name *"
            value={userForm.name}
            onChange={(e) => setUserForm({...userForm, name: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={userForm.phone}
            onChange={(e) => setUserForm({...userForm, phone: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Location (State/District)"
            value={userForm.location}
            onChange={(e) => setUserForm({...userForm, location: e.target.value})}
          />
          <input
            type="text"
            placeholder="Farm Size (e.g., 5 acres)"
            value={userForm.farm_size}
            onChange={(e) => setUserForm({...userForm, farm_size: e.target.value})}
          />
          <input
            type="text"
            placeholder="Crops (comma-separated)"
            value={userForm.crops}
            onChange={(e) => setUserForm({...userForm, crops: e.target.value})}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Starting...' : 'Start Chat 🚀'}
          </button>
        </form>
        
        {error && <div className="error">{error}</div>}
      </div>
    );
  }

  // Chat Interface
  return (
    <div className="chat-widget">
      <div className="chat-header">
        <h3>🌾 FinnoAQ Assistant</h3>
        <button onClick={endChat} className="end-btn">End Chat</button>
      </div>
      
      <div className="messages">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message ${msg.role} ${msg.isUnanswered ? 'unanswered' : ''}`}
          >
            <div className="content">{msg.content}</div>
            {msg.sources?.length > 0 && (
              <div className="sources">
                📚 Sources: {msg.sources.join(', ')}
              </div>
            )}
          </div>
        ))}
        {loading && <div className="message assistant loading">Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about farming..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
    </div>
  );
}


// ============ CSS (styles.css) ============
/*
.chat-widget {
  max-width: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.chat-header {
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.messages {
  height: 400px;
  overflow-y: auto;
  padding: 16px;
  background: #fafafa;
}

.message {
  margin-bottom: 12px;
  padding: 10px 14px;
  border-radius: 18px;
  max-width: 80%;
}

.message.user {
  background: #2e7d32;
  color: white;
  margin-left: auto;
}

.message.assistant {
  background: white;
  border: 1px solid #e0e0e0;
}

.message.unanswered {
  border-color: #ff9800;
  background: #fff3e0;
}

.sources {
  font-size: 11px;
  color: #666;
  margin-top: 6px;
}

.input-form {
  display: flex;
  padding: 12px;
  border-top: 1px solid #e0e0e0;
}

.input-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin-right: 8px;
}

.input-form button {
  background: #2e7d32;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.error {
  background: #ffebee;
  color: #c62828;
  padding: 8px 12px;
  font-size: 13px;
}
*/
```

---

### Next.js Integration

```typescript
// ============ lib/finnoaq-client.ts ============
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export interface UserInfo {
  name: string;
  phone: string;
  location?: string;
  farm_size?: string;
  crops?: string[];
}

export interface ChatResponse {
  success: boolean;
  session_id: string;
  answer: string;
  is_unanswered: boolean;
  sources: string[];
  category?: string;
}

export async function startSession(user: UserInfo) {
  const res = await fetch(`${API_BASE}/session/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user }),
  });
  
  if (!res.ok) throw new Error('Failed to start session');
  return res.json();
}

export async function sendMessage(sessionId: string, message: string): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, message }),
  });
  
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
}

export async function endSession(sessionId: string) {
  const res = await fetch(`${API_BASE}/session/end`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId }),
  });
  
  return res.json();
}


// ============ app/chat/page.tsx (App Router) ============
'use client';

import { useState } from 'react';
import { startSession, sendMessage, endSession } from '@/lib/finnoaq-client';

export default function ChatPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      const data = await startSession({
        name: 'Test User',
        phone: '1234567890',
        crops: ['wheat']
      });
      setSessionId(data.session_id);
      setMessages([{ role: 'assistant', content: data.welcome_message }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!sessionId || !input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);
    
    try {
      const data = await sendMessage(sessionId, input);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.answer,
        isUnanswered: data.is_unanswered 
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (!sessionId) {
    return (
      <button onClick={handleStart} disabled={loading}>
        {loading ? 'Starting...' : 'Start Chat'}
      </button>
    );
  }

  return (
    <div>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            {m.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        disabled={loading}
      />
      <button onClick={handleSend} disabled={loading}>Send</button>
      <button onClick={() => endSession(sessionId)}>End</button>
    </div>
  );
}
```

---

### Mobile (React Native / Expo)

```javascript
// ============ services/api.js ============
const API_BASE = 'https://your-api-server.com/api/v1';

class FinnoAQAPI {
  constructor() {
    this.sessionId = null;
  }

  async request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'API Error');
    }
    
    return response.json();
  }

  async startSession(userInfo) {
    const data = await this.request('/session/start', {
      method: 'POST',
      body: JSON.stringify({ user: userInfo }),
    });
    this.sessionId = data.session_id;
    return data;
  }

  async chat(message) {
    if (!this.sessionId) throw new Error('No session');
    
    return this.request('/chat', {
      method: 'POST',
      body: JSON.stringify({
        session_id: this.sessionId,
        message,
      }),
    });
  }

  async endSession() {
    if (!this.sessionId) return;
    
    const data = await this.request('/session/end', {
      method: 'POST',
      body: JSON.stringify({ session_id: this.sessionId }),
    });
    this.sessionId = null;
    return data;
  }
}

export const api = new FinnoAQAPI();


// ============ screens/ChatScreen.js ============
import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { api } from '../services/api';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef();

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    
    try {
      const response = await api.chat(input);
      const botMsg = { 
        id: Date.now() + 1, 
        role: 'bot', 
        text: response.answer,
        isUnanswered: response.is_unanswered
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        role: 'error', 
        text: error.message 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.message,
      item.role === 'user' ? styles.userMessage : styles.botMessage,
      item.isUnanswered && styles.unansweredMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
        style={styles.messageList}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask about farming..."
          editable={!loading}
        />
        <TouchableOpacity 
          style={styles.sendButton} 
          onPress={sendMessage}
          disabled={loading}
        >
          <Text style={styles.sendButtonText}>
            {loading ? '...' : 'Send'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  messageList: { flex: 1, padding: 16 },
  message: { 
    padding: 12, 
    borderRadius: 16, 
    marginBottom: 8, 
    maxWidth: '80%' 
  },
  userMessage: { 
    backgroundColor: '#2e7d32', 
    alignSelf: 'flex-end' 
  },
  botMessage: { 
    backgroundColor: 'white', 
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  unansweredMessage: {
    borderColor: '#ff9800',
    backgroundColor: '#fff3e0'
  },
  messageText: { fontSize: 16 },
  inputContainer: { 
    flexDirection: 'row', 
    padding: 12, 
    backgroundColor: 'white' 
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#e0e0e0', 
    borderRadius: 20, 
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8
  },
  sendButton: { 
    backgroundColor: '#2e7d32', 
    borderRadius: 20, 
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  sendButtonText: { color: 'white', fontWeight: 'bold' }
});
```

---

## CORS Configuration

The API allows all origins by default. For production, update `api.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yourfrontend.com"],  # Specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Deployment

### Using Docker

```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Using systemd

```ini
[Unit]
Description=FinnoAQ AgriTech API
After=network.target

[Service]
User=www-data
WorkingDirectory=/path/to/data_manager_agent
ExecStart=/usr/bin/uvicorn api:app --host 0.0.0.0 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

---

## Support

For issues or feature requests, contact the FinnoAQ development team.
