import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

type Review = {
  movieId: ObjectId;
  name: string;
  rating: number;
  comment: string;
  loggedIn: boolean;
  profileImageId: string;
  createdAt: Date;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const review: Review = {
      movieId: body.movieId,
      name: body.name,
      rating: body.rating,
      comment: body.comment,
      loggedIn: body.loggedIn,
      profileImageId: body.profileImageId,
      createdAt: new Date(),
    };

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