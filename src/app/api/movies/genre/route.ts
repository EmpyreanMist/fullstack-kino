import connectDB from '@/lib/mongodb/db';
import Movie from '@/lib/mongodb/models/movies';
import { NextResponse } from 'next/server';

export async function GET() {
    await connectDB();

    try {
        const genres: string[] = await Movie.distinct('genre');

        return NextResponse.json({ genres });
    } catch (error) {
        console.error('Fel vid hämtning av genre-lista: ', error);
        return NextResponse.json({ error: 'Kunde inte hämta genrer' }, { status: 500 });
    }
}