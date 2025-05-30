import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];
    const movie = await Movie.findById(id);
    if (!movie) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }
    return NextResponse.json({ movie });
  } catch (error) {
    console.error('Error in fetching movie title:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
