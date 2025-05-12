import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log(email, password);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(data);
    if (error || !data.session) {
      return NextResponse.json({ error: 'Fel email eller lösenord' }, { status: 401 });
    }
    /* HÄR SKA DET LOGGAS IN PÅ NÅGOT MAGISKT SÄTT */
  } catch (error) {
    /* HÄR GICK DET MINDRE BRA ATT LOGGA IN */
    return NextResponse.json({ error: 'Invalid login request' }, { status: 400 });
  }
}
