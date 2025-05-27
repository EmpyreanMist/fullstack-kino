import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb/db";
import { Screening } from "@/lib/mongodb/models/screenings";
import sortScreenings from "@/components/ScreeningsSort";
import { ScreeningProp } from "@/lib/typesScreening";

export async function GET(){
    let sortedScreenings : ScreeningProp[];
    try{
        connectDB();
        const screenings: ScreeningProp[] = await Screening.find();
        sortedScreenings = sortScreenings(screenings);
        return NextResponse.json({data: sortedScreenings});
    } catch(error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
    
}