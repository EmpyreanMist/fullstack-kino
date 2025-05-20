import connectDB from "../../../../../backend/config/db";
import { Screening } from "../../../../../backend/models/screenings";
import sortScreenings from "@/components/ScreeningsSort";
import { ScreeningProp } from "@/lib/typesScreening";

export async function GET(){
    try{
        connectDB();
        const screenings: ScreeningProp[] = await Screening.find();
        console.log(screenings);
        const sortedScreenings = sortScreenings(screenings);
    } catch(error) {
        console.log("error fetching screenigs")
    }
}