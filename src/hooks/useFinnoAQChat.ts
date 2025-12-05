import { useState, useCallback } from 'react';
import { startSession, sendMessage, endSession, UserInfo } from '../lib/finnoaq-client';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  isUnanswered?: boolean;
  sources?: string[];
}

export function useFinnoAQChat() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const startChat = useCallback(async (userInfo: UserInfo) => {
    setLoading(true);
    setError(null);
    try {
      const data = await startSession(userInfo);
      setSessionId(data.session_id);
      setMessages([{ role: 'assistant', content: data.welcome_message }]);
      setIsConnected(true);
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
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.answer,
        isUnanswered: data.is_unanswered,
        sources: data.sources
      }]);
    } catch (err: any) {
      setError(err.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

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
