import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

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