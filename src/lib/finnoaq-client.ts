const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://194.238.16.37:4000/api/v1';

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

export interface StartSessionResponse {
  success: boolean;
  session_id: string;
  message: string;
  welcome_message: string;
}

export async function startSession(user: UserInfo): Promise<StartSessionResponse> {
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
