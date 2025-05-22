import HomePage from "@/components/homePage";
import { GET } from "@/app/api/screenings/upcoming/route";
GET();
export default function Home() {
  return <div>
    <HomePage/>
  </div>;
}
