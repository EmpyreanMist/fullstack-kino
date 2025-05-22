import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb/db";
import { Screening } from "@/lib/mongodb/models/screenings";
import sortScreenings from "@/components/ScreeningsSort";
import { ScreeningProp } from "@/lib/typesScreening";

export async function GET(){
    let sortedScreenings : ScreeningProp[];
    console.log("in GET");
    try{
        console.log("In try in GET")
        connectDB();
        const screenings: ScreeningProp[] = await Screening.find();
        sortedScreenings = sortScreenings(screenings);
        return NextResponse.json({data: sortedScreenings});
    } catch(error) {
        console.log("Something went wrong in get");
        console.log("error fetching screenigs")
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
    
}