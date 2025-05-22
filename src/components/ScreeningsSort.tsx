import { ScreeningProp } from "@/lib/typesScreening";

//Screenings for the upcoming 5 days
export default function sortScreenings(screenings: ScreeningProp[]) : ScreeningProp[]{
    const today = new Date();
    const limit = new Date();
    const sortedScreenings: ScreeningProp[] = [];
    limit.setDate(limit.getDate()+5);
    screenings.forEach((screening)=>{
        if(screening.date >= today && screening.date <= limit){
            sortedScreenings.push(screening);
        }
    });
    sortedScreenings.sort((a, b) => a.date.getTime() - b.date.getTime());
    return(sortedScreenings);
}