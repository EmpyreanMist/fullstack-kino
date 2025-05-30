'use client'
import BookingSetUp from "@/components/BookingPage";
import { BookingProps } from "@/lib/TypesBooking";

export default function BookingPage({ params }: BookingProps){
    return(
        <BookingSetUp params= { params }/>
    )
}