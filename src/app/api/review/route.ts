import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

type Review = {
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

    await client.connect();
    const db = client.db();
    const collection = db.collection('reviews');

    let query = {};
    if (movieId) {
      query = { movieId: movieId };
    }

    const reviews = await collection.find(query).sort({ createdAt: -1 }).toArray();

    console.log(`Found ${reviews.length} reviews`);

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const review: Review = {
      movieId: body.movieId,
      name: body.name,
      rating: body.rating,
      comment: body.comment,
      loggedIn: body.loggedIn || false,
      profileImageId: body.loggedIn ? 'avatar' : 'guest',
      createdAt: new Date(),
    };

    console.log('Creating new review:', review);

    await client.connect();
    const db = client.db();
    const collection = db.collection('reviews');

    const result = await collection.insertOne(review);

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
