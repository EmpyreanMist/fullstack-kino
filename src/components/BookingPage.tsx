'use client'
import { use, useEffect } from "react";
import { BookingProps } from "@/lib/TypesBooking";

export default function BookingSetUp({ params }: BookingProps){
    console.log("in BookingSetUp");
    const resolvedParams = use(params as Promise<{ id: string }>);
    const id = resolvedParams.id;
    console.log(id);

    useEffect(() => {
        const fetchMovieData = async () => {
            if(!id) {
                console.log("no movie id");
            }else {
                
                    const response = await fetch(`/api/movies/${id}`);
                    if(!response.ok){
                        throw new Error ("Failed to fetch movie info");
                    }
                    const payload = await response.json();
                    console.log(payload);
               
            }
        };
        fetchMovieData()
    }, []);
    return(
        <main className="bg-dark text-light">
            <h4>Här kommer du snart kunna boka biljetter</h4>
        </main>
        
    )
}