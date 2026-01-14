-- Create user_queries table for storing chat queries and responses
CREATE TABLE IF NOT EXISTS user_queries (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    user_name VARCHAR(255),
    user_phone VARCHAR(50),
    user_location VARCHAR(255),
    farm_size VARCHAR(100),
    crops TEXT[],
    query TEXT NOT NULL,
    response TEXT,
    sources TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on session_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_queries_session_id ON user_queries(session_id);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_user_queries_created_at ON user_queries(created_at);

-- Create index on user_phone for user lookup
CREATE INDEX IF NOT EXISTS idx_user_queries_user_phone ON user_queries(user_phone);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_user_queries_updated_at ON user_queries;
CREATE TRIGGER update_user_queries_updated_at
    BEFORE UPDATE ON user_queries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create chat_sessions table for tracking user sessions
CREATE TABLE IF NOT EXISTS chat_sessions (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) UNIQUE NOT NULL,
    user_name VARCHAR(255),
    user_phone VARCHAR(50),
    user_location VARCHAR(255),
    farm_size VARCHAR(100),
    crops TEXT[],
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Create index on session_id
CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON chat_sessions(session_id);

-- Create index on user_phone
CREATE INDEX IF NOT EXISTS idx_chat_sessions_user_phone ON chat_sessions(user_phone);

COMMENT ON TABLE user_queries IS 'Stores all user queries and AI responses from the FinnoAQ chat widget';
COMMENT ON TABLE chat_sessions IS 'Tracks user chat sessions with their profile information';
