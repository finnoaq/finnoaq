#!/usr/bin/env node

/**
 * Test script to verify database integration
 */

const { Pool } = require('pg');

const pool = new Pool({
  host: '194.238.16.37',
  port: 5432,
  database: 'userQuerydb',
  user: 'neoversine@gmail.com',
  password: 'tree#22##wAAw',
});

async function testDatabase() {
  console.log('🧪 Testing Database Integration\n');
  
  try {
    // Test 1: Connection
    console.log('1️⃣ Testing connection...');
    const timeResult = await pool.query('SELECT NOW() as time');
    console.log('✅ Connected! Server time:', timeResult.rows[0].time);
    
    // Test 2: Check tables exist
    console.log('\n2️⃣ Checking tables...');
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('user_queries', 'chat_sessions')
      ORDER BY table_name
    `);
    console.log('✅ Found tables:', tablesResult.rows.map(r => r.table_name).join(', '));
    
    // Test 3: Insert test session
    console.log('\n3️⃣ Testing session insert...');
    const testSessionId = `test_${Date.now()}`;
    await pool.query(`
      INSERT INTO chat_sessions (session_id, user_name, user_phone, crops)
      VALUES ($1, $2, $3, $4)
    `, [testSessionId, 'Test User', '+1234567890', ['wheat', 'corn']]);
    console.log('✅ Session inserted successfully');
    
    // Test 4: Insert test query
    console.log('\n4️⃣ Testing query insert...');
    await pool.query(`
      INSERT INTO user_queries (session_id, user_name, user_phone, query, response, sources)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [
      testSessionId,
      'Test User',
      '+1234567890',
      'How do I grow wheat?',
      'Plant wheat seeds in well-drained soil...',
      ['finnofarmscompanyDocs.txt']
    ]);
    console.log('✅ Query inserted successfully');
    
    // Test 5: Retrieve data
    console.log('\n5️⃣ Testing data retrieval...');
    const queriesResult = await pool.query(`
      SELECT * FROM user_queries WHERE session_id = $1
    `, [testSessionId]);
    console.log('✅ Retrieved', queriesResult.rows.length, 'queries');
    console.log('   Query:', queriesResult.rows[0].query);
    console.log('   Response:', queriesResult.rows[0].response.substring(0, 50) + '...');
    
    // Test 6: Count all records
    console.log('\n6️⃣ Checking total records...');
    const countResult = await pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM chat_sessions) as sessions,
        (SELECT COUNT(*) FROM user_queries) as queries
    `);
    console.log('✅ Total sessions:', countResult.rows[0].sessions);
    console.log('✅ Total queries:', countResult.rows[0].queries);
    
    // Cleanup test data
    console.log('\n🧹 Cleaning up test data...');
    await pool.query('DELETE FROM user_queries WHERE session_id = $1', [testSessionId]);
    await pool.query('DELETE FROM chat_sessions WHERE session_id = $1', [testSessionId]);
    console.log('✅ Test data cleaned up');
    
    console.log('\n✨ All tests passed! Database is ready to use.\n');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

testDatabase();
