import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';


export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/'); 
    const id = pathSegments[pathSegments.length - 1];

    console.log('Movie ID from URL:', id);

    await connectDB();
    console.log('Database:', mongoose.connection.name);

    const movie = await Movie.findById(id).lean();

    if (!movie) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }

    return NextResponse.json({ movie });
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    return NextResponse.json({ error: 'Failed to fetch movie' }, { status: 500 });
  }
}
