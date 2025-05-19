import { NextResponse } from 'next/server';
/* import { supabase } from '@/lib/supabaseClient'; */
import connectDB from '../../../../backend/config/db';
import Movie from '../../../../backend/models/movies';

/* import { MongoClient} from 'mongodb'; */

export async function GET() {
  console.log('hej');
  await connectDB();


  /* const { searchParams} = new URL(req.url); */
 /*  const currentPage: number = parseInt(searchParams.get('page')) | 0;
  const limit = 8;
  const page = parseInt(currentPage) || 1; */


  try {
    const movies = await Movie.find();
    /* const total = await Movie.countDocuments(); */
    /* const moviesFinal = await Movie.find().skip((page - 1) ) */
    console.log(movies);
    return NextResponse.json(movies);
  }
  catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }

  return NextResponse.json;

  /* // Replace the uri string with your MongoDB deployment's connection string.
    const uri =
      "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
    const client = new MongoClient(uri);
    async function run() {
      try {
        await client.connect();
        // database and collection code goes here
        // find code goes here
        // iterate code goes here
        const db = client.db
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir); */
}
