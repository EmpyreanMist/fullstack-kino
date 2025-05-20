import HomePage from "@/components/homePage";
import connectDB from "../../backend/config/db";
import { GET } from "@/app/api/screenings/upcoming/route";
//const response = await fetch("api/screenings/upcoming");
GET();
export default function Home() {
  return <div>
    <HomePage/>
  </div>;
}
