#!/usr/bin/env node

/**
 * Database initialization script
 * Run this to create the database schema
 */

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  host: '194.238.16.37',
  port: 5432,
  database: 'userQuerydb',
  user: 'neoversine@gmail.com',
  password: 'tree#22##wAAw',
});

async function initializeDatabase() {
  try {
    console.log('🔄 Connecting to database...');
    
    // Test connection
    const testResult = await pool.query('SELECT NOW()');
    console.log('✅ Connected to database at:', testResult.rows[0].now);
    
    // Read schema file
    const schemaPath = path.join(__dirname, '../src/lib/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('🔄 Creating tables and indexes...');
    
    // Execute schema
    await pool.query(schema);
    
    console.log('✅ Database schema initialized successfully!');
    console.log('\nCreated tables:');
    console.log('  - user_queries (stores chat queries and responses)');
    console.log('  - chat_sessions (tracks user sessions)');
    console.log('\nCreated indexes for optimized queries');
    
    // Verify tables were created
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name
    `);
    
    console.log('\n📊 Current tables in database:');
    tablesResult.rows.forEach(row => {
      console.log(`  - ${row.table_name}`);
    });
    
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

initializeDatabase();
