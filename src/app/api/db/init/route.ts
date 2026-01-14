import { NextRequest, NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/queries';

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    return NextResponse.json(
      { message: 'Database initialized successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error initializing database:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { query } = await import('@/lib/db');
    
    // Test connection
    const result = await query('SELECT NOW() as current_time');
    
    return NextResponse.json(
      { 
        status: 'connected',
        server_time: result.rows[0].current_time,
        message: 'Database connection successful'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Database connection test failed:', error);
    return NextResponse.json(
      { 
        status: 'disconnected',
        error: 'Database connection failed',
        details: error.message
      },
      { status: 500 }
    );
  }
}
