import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
export async function GET() {
    const supabase = await createClient();

    const {
      data: { user },
      error
    } = await supabase.auth.getUser();
    
    if (error) {
        console.error('Fel vid hämtning av användare:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    
      if (!user) {
        return NextResponse.json({ user: null }, { status: 200 });
      }
    
      return NextResponse.json({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.user_metadata?.fullName ?? '',
        },
      });
}
