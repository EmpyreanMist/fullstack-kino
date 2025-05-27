import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';
import { NextResponse } from 'next/server';

export async function GET({ params }: { params: {id: string}}){
    try{
        await connectDB();
        const id = params.id;
        const movie = await Movie.findById(id);
        console.log(movie);
    }catch(error){
        console.log("Error in fetching movie title");
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}