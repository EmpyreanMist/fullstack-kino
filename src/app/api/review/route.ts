import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';

//-------not closing on every request now-------
const reviewSchema = new mongoose.Schema({
  movieId: String,
  name: String,
  rating: Number,
  comment: String,
  loggedIn: Boolean,
  profileImageId: String,
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

type ReviewType = {
  movieId: string;
  name: string;
  rating: number;
  comment: string;
  loggedIn: boolean;
  profileImageId: string;
  createdAt: Date;
};

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const movieId = searchParams.get('movieId');

    console.log('GET reviews - movieId param:', movieId);

    await connectDB();

    let query = {};
    if (movieId) {
      query = { movieId: movieId };
    }

    const reviews = await Review.find(query).sort({ createdAt: -1 });

    console.log(`Found ${reviews.length} reviews`);

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const review = new Review({
      movieId: body.movieId,
      name: body.name,
      rating: body.rating,
      comment: body.comment,
      loggedIn: body.loggedIn || false,
      profileImageId: body.loggedIn ? 'avatar' : 'guest',
      createdAt: new Date(),
    });

    console.log('Creating new review:', review);

    const result = await review.save();

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
