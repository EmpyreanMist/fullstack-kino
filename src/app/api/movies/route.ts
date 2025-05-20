import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';

export async function GET(req: NextRequest) {
  await connectDB();
  console.log("🔎 Databas:", mongoose.connection.name);

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10); // t.ex. /api/movies?page=2
  const limit = 12;
  const skip = (page - 1) * limit;

  try {
    const movies = await Movie.find({}, 'title poster rating year genre')
      .skip(skip)
      .limit(limit);

    const totalMovies = await Movie.countDocuments();
    const totalPages = Math.ceil(totalMovies / limit);

/*     console.log(movies.poster); */


    return NextResponse.json({
      currentPage: page,
      totalPages,
      totalMovies,
      movies,
    });
  } catch (error) {
    console.error('❌ Fel vid hämtning:', error);
    return NextResponse.json({ error: 'Kunde inte hämta filmer' }, { status: 500 });
  }
}
