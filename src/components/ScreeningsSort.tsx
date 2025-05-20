import { Screening } from "../../backend/models/screenings";
import { ScreeningProp } from "@/lib/typesScreening";

//Screenings for the upcoming 5 days, but max 10
export default function sortScreenings(screenings: ScreeningProp[]) : ScreeningProp[]{
    const today = new Date();
    const limit = new Date();
    limit.setDate(limit.getDate()+5);
    console.log(today + " "+limit);
    //console.log(screenings);
    const sortedScreenings: ScreeningProp[] = screenings;
    return(sortedScreenings);
}