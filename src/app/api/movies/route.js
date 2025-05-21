// /app/api/movies/route.js

import { NextResponse } from 'next/server';
import connectDB from '@/backend/config/db.js';
import Movie from '@/backend/models/movies';

export async function GET() {
  try {
    await connectDB();
    const movies = await Movie.find(); // Fetch all movies
    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}
