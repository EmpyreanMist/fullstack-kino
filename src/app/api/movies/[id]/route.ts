import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    console.log('Database:', mongoose.connection.name);

    // ---saving id to be save any heavy usecase-----
    const id = params.id;
    console.log('Fetching movie with ID:', id);

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
