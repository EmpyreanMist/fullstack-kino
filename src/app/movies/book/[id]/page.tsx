'use client'
import BookingSetUp from "@/components/BookingPage";

type BookingProps = {
    params: Promise<{ id: string}> | { id: string };
}

export default function BookingPage({ params }: BookingProps){
    console.log("In booking page")
    return(
        <BookingSetUp/>
    )
}