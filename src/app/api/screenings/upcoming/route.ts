import connectDB from "../../../../../backend/config/db";
import { Screening } from "../../../../../backend/models/screenings";

export async function GET(){
    try{
        connectDB();
        const screenings = await Screening.find();
        console.log(screenings);
    } catch(error) {
        console.log("error fetching screenigs")
    }
}