import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';

export async function GET(req: NextRequest) {
  await connectDB();
  console.log("Databas:", mongoose.connection.name);

  const { searchParams } = new URL(req.url);

  const limit: number = 12;
  const page: number = parseInt(searchParams.get('page') || '1', 10);
  const search: string = searchParams.get('search') || '';
  const genreParam: string = searchParams.get('genre') || '';
  const sort: string = searchParams.get('sort') || '';
  const skip = (page - 1) * limit;

  // 🔍 Bygg filter beroende på query
const filter: Record<string, unknown> = {};

  if (search) {
    filter.title = { $regex: search, $options: 'i' }; // sök i titlar, case-insensitive
  }

  if (genreParam) {
    const genres = genreParam.split(',').map(g => g.trim());
    filter.genre = { $all: genres };
  }

  //  Sorteringslogik
//  Returnerar alltid ett giltigt objekt för sortering
const sortOption: Record<string, 1 | -1> = 
  sort === 'highest-rating' ? { rating: -1 } :
  sort === 'lowest-rating' ? { rating: 1 } :
  sort === 'release-rating' ? { year: -1 } :
  {}; // default: ingen sortering

  try {
    const movies = await Movie.find(filter, 'title poster rating year genre')
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .lean();

    const totalMovies = await Movie.countDocuments(filter);
    const totalPages = Math.ceil(totalMovies / limit);

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
