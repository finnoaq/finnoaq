import { NextRequest, NextResponse } from 'next/server';
import { insertUserQuery, getQueriesBySession, createChatSession } from '@/lib/queries';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { session_id, user_name, user_phone, user_location, farm_size, crops, query, response, sources } = body;

    // Validate required fields
    if (!session_id || !query) {
      return NextResponse.json(
        { error: 'session_id and query are required' },
        { status: 400 }
      );
    }

    // Insert the user query
    const result = await insertUserQuery({
      session_id,
      user_name,
      user_phone,
      user_location,
      farm_size,
      crops,
      query,
      response,
      sources,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error('Error inserting user query:', error);
    return NextResponse.json(
      { error: 'Failed to insert user query', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const session_id = searchParams.get('session_id');

    if (!session_id) {
      return NextResponse.json(
        { error: 'session_id is required' },
        { status: 400 }
      );
    }

    const queries = await getQueriesBySession(session_id);
    return NextResponse.json(queries, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching queries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch queries', details: error.message },
      { status: 500 }
    );
  }
}
