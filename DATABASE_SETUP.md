# FinnoAQ Database Integration

This document describes the database integration for the FinnoAQ chat system.

## Database Configuration

**Database Details:**
- Host: `194.238.16.37`
- Port: `5432`
- Database: `userQuerydb`
- User: `neoversine@gmail.com`

## Database Schema

### Tables

#### 1. `chat_sessions`
Tracks user chat sessions with their profile information.

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| session_id | VARCHAR(255) | Unique session identifier |
| user_name | VARCHAR(255) | User's name |
| user_phone | VARCHAR(50) | User's phone number |
| user_location | VARCHAR(255) | User's location |
| farm_size | VARCHAR(100) | Farm size |
| crops | TEXT[] | Array of crops |
| started_at | TIMESTAMP | Session start time |
| last_activity_at | TIMESTAMP | Last activity time |
| is_active | BOOLEAN | Session active status |

#### 2. `user_queries`
Stores all user queries and AI responses.

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| session_id | VARCHAR(255) | Session identifier |
| user_name | VARCHAR(255) | User's name |
| user_phone | VARCHAR(50) | User's phone number |
| user_location | VARCHAR(255) | User's location |
| farm_size | VARCHAR(100) | Farm size |
| crops | TEXT[] | Array of crops |
| query | TEXT | User's question |
| response | TEXT | AI's response |
| sources | TEXT[] | Sources used for response |
| created_at | TIMESTAMP | Query creation time |
| updated_at | TIMESTAMP | Last update time |

### Indexes

- `idx_user_queries_session_id` - Fast session lookups
- `idx_user_queries_created_at` - Time-based queries
- `idx_user_queries_user_phone` - User lookup by phone
- `idx_chat_sessions_session_id` - Session lookups
- `idx_chat_sessions_user_phone` - User lookup by phone

## Setup Instructions

### 1. Initialize the Database

Run the initialization script to create tables and indexes:

```bash
npm run db:init
```

Or manually:

```bash
node scripts/init-db.js
```

### 2. Test Database Connection

You can test the database connection via the API:

```bash
curl http://localhost:3000/api/db/init
```

## API Endpoints

### Sessions API

**POST /api/sessions**
Create or update a chat session.

```json
{
  "session_id": "unique-session-id",
  "user_name": "John Doe",
  "user_phone": "+1234567890",
  "user_location": "California",
  "farm_size": "10 acres",
  "crops": ["wheat", "corn"]
}
```

**GET /api/sessions?session_id=xxx**
Retrieve a chat session.

**PATCH /api/sessions**
Update session activity timestamp.

### Queries API

**POST /api/queries**
Save a user query and response.

```json
{
  "session_id": "unique-session-id",
  "user_name": "John Doe",
  "user_phone": "+1234567890",
  "query": "How do I water my crops?",
  "response": "Water your crops in the morning...",
  "sources": ["finnofarmscompanyDocs.txt"]
}
```

**GET /api/queries?session_id=xxx**
Retrieve all queries for a session.

## Database Connection

The database connection is managed through `src/lib/db.ts` which creates a connection pool:

```typescript
import { query } from '@/lib/db';

// Execute a query
const result = await query('SELECT * FROM user_queries WHERE session_id = $1', [sessionId]);
```

## Helper Functions

Available in `src/lib/queries.ts`:

- `createChatSession(session)` - Create/update a session
- `insertUserQuery(query)` - Insert a query
- `getQueriesBySession(sessionId)` - Get all queries for a session
- `getChatSession(sessionId)` - Get session details
- `updateSessionActivity(sessionId)` - Update last activity
- `getQueriesByPhone(phone)` - Get queries by phone number
- `getQueryStats()` - Get query statistics

## Automatic Data Saving

The chat widget automatically saves data to the database:

1. **Session Start**: When a user starts a chat, their session is saved to `chat_sessions`
2. **Each Query**: Every question and response is saved to `user_queries`
3. **Session Activity**: Last activity is updated with each interaction

## Security Notes

⚠️ **Important**: The database credentials are currently hardcoded in the source files. For production:

1. Move credentials to environment variables:
   ```bash
   DATABASE_HOST=194.238.16.37
   DATABASE_PORT=5432
   DATABASE_NAME=userQuerydb
   DATABASE_USER=neoversine@gmail.com
   DATABASE_PASSWORD=tree#22##wAAw
   ```

2. Update `src/lib/db.ts` to use environment variables:
   ```typescript
   const pool = new Pool({
     host: process.env.DATABASE_HOST,
     port: parseInt(process.env.DATABASE_PORT || '5432'),
     database: process.env.DATABASE_NAME,
     user: process.env.DATABASE_USER,
     password: process.env.DATABASE_PASSWORD,
   });
   ```

3. Add `.env.local` to `.gitignore`

## Monitoring & Analytics

You can query analytics using the helper functions:

```typescript
import { getQueryStats } from '@/lib/queries';

const stats = await getQueryStats();
// Returns: total queries, sessions, users by date
```

## Troubleshooting

### Connection Issues

If you see connection errors:

1. Check database is running: `npm run db:init`
2. Verify credentials in `src/lib/db.ts`
3. Check firewall allows connection to port 5432
4. Verify PostgreSQL is accepting remote connections

### Schema Issues

To reset the schema:

```bash
# Connect to database
psql -h 194.238.16.37 -p 5432 -U neoversine@gmail.com -d userQuerydb

# Drop and recreate
DROP TABLE IF EXISTS user_queries CASCADE;
DROP TABLE IF EXISTS chat_sessions CASCADE;

# Then run init script
npm run db:init
```

## Next Steps

1. ✅ Database connected and schema created
2. ✅ API endpoints implemented
3. ✅ Chat widget integrated with database
4. 🔄 Add environment variables for security
5. 🔄 Add data visualization dashboard
6. 🔄 Add query analytics and reporting
