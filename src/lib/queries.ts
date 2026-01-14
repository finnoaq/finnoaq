import { query } from './db';

export interface UserQuery {
  id?: number;
  session_id: string;
  user_name?: string;
  user_phone?: string;
  user_location?: string;
  farm_size?: string;
  crops?: string[];
  query: string;
  response?: string;
  sources?: string[];
  created_at?: Date;
  updated_at?: Date;
}

export interface ChatSession {
  id?: number;
  session_id: string;
  user_name?: string;
  user_phone?: string;
  user_location?: string;
  farm_size?: string;
  crops?: string[];
  started_at?: Date;
  last_activity_at?: Date;
  is_active?: boolean;
}

/**
 * Create a new chat session
 */
export async function createChatSession(session: ChatSession) {
  const text = `
    INSERT INTO chat_sessions (session_id, user_name, user_phone, user_location, farm_size, crops)
    VALUES ($1, $2, $3, $4, $5, $6)
    ON CONFLICT (session_id) DO UPDATE SET
      last_activity_at = CURRENT_TIMESTAMP,
      is_active = TRUE
    RETURNING *
  `;
  const values = [
    session.session_id,
    session.user_name,
    session.user_phone,
    session.user_location,
    session.farm_size,
    session.crops,
  ];
  const result = await query(text, values);
  return result.rows[0];
}

/**
 * Insert a new user query
 */
export async function insertUserQuery(userQuery: UserQuery) {
  const text = `
    INSERT INTO user_queries (session_id, user_name, user_phone, user_location, farm_size, crops, query, response, sources)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
  `;
  const values = [
    userQuery.session_id,
    userQuery.user_name,
    userQuery.user_phone,
    userQuery.user_location,
    userQuery.farm_size,
    userQuery.crops,
    userQuery.query,
    userQuery.response,
    userQuery.sources,
  ];
  const result = await query(text, values);
  return result.rows[0];
}

/**
 * Get all queries for a session
 */
export async function getQueriesBySession(sessionId: string) {
  const text = `
    SELECT * FROM user_queries
    WHERE session_id = $1
    ORDER BY created_at ASC
  `;
  const result = await query(text, [sessionId]);
  return result.rows;
}

/**
 * Get a chat session by session_id
 */
export async function getChatSession(sessionId: string) {
  const text = `
    SELECT * FROM chat_sessions
    WHERE session_id = $1
  `;
  const result = await query(text, [sessionId]);
  return result.rows[0];
}

/**
 * Update last activity for a session
 */
export async function updateSessionActivity(sessionId: string) {
  const text = `
    UPDATE chat_sessions
    SET last_activity_at = CURRENT_TIMESTAMP
    WHERE session_id = $1
    RETURNING *
  `;
  const result = await query(text, [sessionId]);
  return result.rows[0];
}

/**
 * Get all queries by user phone number
 */
export async function getQueriesByPhone(phone: string) {
  const text = `
    SELECT * FROM user_queries
    WHERE user_phone = $1
    ORDER BY created_at DESC
  `;
  const result = await query(text, [phone]);
  return result.rows;
}

/**
 * Get query statistics
 */
export async function getQueryStats() {
  const text = `
    SELECT 
      COUNT(*) as total_queries,
      COUNT(DISTINCT session_id) as total_sessions,
      COUNT(DISTINCT user_phone) as total_users,
      DATE(created_at) as query_date
    FROM user_queries
    WHERE created_at >= NOW() - INTERVAL '30 days'
    GROUP BY DATE(created_at)
    ORDER BY query_date DESC
  `;
  const result = await query(text);
  return result.rows;
}

/**
 * Initialize database schema
 */
export async function initializeDatabase() {
  // Read and execute schema.sql
  const fs = require('fs');
  const path = require('path');
  const schemaPath = path.join(process.cwd(), 'src/lib/schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf8');
  
  try {
    await query(schema);
    console.log('✅ Database schema initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Error initializing database schema:', error);
    throw error;
  }
}
