import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: {id: string}}){
    try{
        await connectDB();
        const id = params.id;
        console.log('Fetching movie with ID', id);
        const movie = await Movie.findById(id);
        console.log(movie.title);
    }catch(error){
        console.log("Error in fetching movie title");
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}