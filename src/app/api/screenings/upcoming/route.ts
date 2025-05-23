import { NextResponse } from "next/server";
import connectDB from "../../../../../backend/config/db";
import { Screening } from "../../../../../backend/models/screenings";
import sortScreenings from "@/components/ScreeningsSort";
import { ScreeningProp } from "@/lib/typesScreening";

export async function GET(){
    let sortedScreenings : ScreeningProp[];
    try{
        connectDB();
        const screenings: ScreeningProp[] = await Screening.find();
        console.log(screenings);
        sortedScreenings = sortScreenings(screenings);
        return NextResponse.json({data: sortedScreenings})
    } catch(error) {
        console.log("error fetching screenigs")
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
    
}