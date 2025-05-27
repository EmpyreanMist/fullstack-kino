import { ScreeningProp } from "@/lib/typesScreening";

//Screenings for the upcoming 5 days
export default function sortScreenings(screenings: ScreeningProp[]) : ScreeningProp[]{
    const today = new Date();
    const limit = new Date();
    const sortedScreenings: ScreeningProp[] = [];
    limit.setDate(limit.getDate()+5);
    screenings.forEach((screening)=>{
        const date = new Date(screening.date);
        if(date >= today && date <= limit){
            sortedScreenings.push(screening);
        }
    });
    sortedScreenings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return(sortedScreenings);
}