import { useState, useCallback } from 'react';
import { startSession, sendMessage, endSession, UserInfo } from '../lib/finnoaq-client';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  isUnanswered?: boolean;
  sources?: string[];
}

// Helper to save session to database
async function saveSessionToDB(sessionId: string, userInfo: UserInfo) {
  try {
    await fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        user_name: userInfo.name,
        user_phone: userInfo.phone,
        user_location: userInfo.location,
        farm_size: userInfo.farm_size,
        crops: userInfo.crops,
      }),
    });
  } catch (error) {
    console.error('Failed to save session to DB:', error);
  }
}

// Helper to save query to database
async function saveQueryToDB(sessionId: string, userInfo: UserInfo | null, query: string, response: string, sources?: string[]) {
  try {
    await fetch('/api/queries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        user_name: userInfo?.name,
        user_phone: userInfo?.phone,
        user_location: userInfo?.location,
        farm_size: userInfo?.farm_size,
        crops: userInfo?.crops,
        query,
        response,
        sources,
      }),
    });
  } catch (error) {
    console.error('Failed to save query to DB:', error);
  }
}

export function useFinnoAQChat() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const startChat = useCallback(async (userInfo: UserInfo) => {
    setLoading(true);
    setError(null);
    try {
      const data = await startSession(userInfo);
      setSessionId(data.session_id);
      setMessages([{ role: 'assistant', content: data.welcome_message }]);
      setIsConnected(true);
      setUserInfo(userInfo);
      
      // Save session to database
      await saveSessionToDB(data.session_id, userInfo);
    } catch (err: any) {
      setError(err.message || 'Failed to start chat');
    } finally {
      setLoading(false);
    }
  }, []);

  const sendChatMessage = useCallback(async (message: string) => {
    if (!sessionId) return;
    
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setLoading(true);
    setError(null);
    
    try {
      const data = await sendMessage(sessionId, message);
      const assistantMessage = {
        role: 'assistant' as const,
        content: data.answer,
        isUnanswered: data.is_unanswered,
        sources: data.sources
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Save query and response to database
      await saveQueryToDB(sessionId, userInfo, message, data.answer, data.sources);
    } catch (err: any) {
      setError(err.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  }, [sessionId, userInfo]);

  const endChat = useCallback(async () => {
    if (!sessionId) return;
    try {
      await endSession(sessionId);
      setSessionId(null);
      setIsConnected(false);
      setMessages([]);
    } catch (err: any) {
      console.error('Error ending session:', err);
    }
  }, [sessionId]);

  return {
    sessionId,
    messages,
    loading,
    error,
    isConnected,
    startChat,
    sendMessage: sendChatMessage,
    endChat
  };
}
