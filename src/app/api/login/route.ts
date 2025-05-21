import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  try {
    const { email, password } = await req.json();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error || !data.session) {
      return NextResponse.json({ error: 'Fel email eller lösenord' }, { status: 401 });
    }

    return NextResponse.json({ session: data.session });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Invalid login request' }, { status: 400 });
  }
}
