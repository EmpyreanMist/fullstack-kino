'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';


/*export default function BookingPage() {
    console.log("in booking page reroute");
    const router = useRouter();
    const SearchParams = useSearchParams();
    const id = SearchParams.get("id");
    useEffect(()=>{
        if(id){
            router.replace(`/booking/${id}`);
        }
    }, [id, router]);
}*/
