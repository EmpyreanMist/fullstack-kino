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
      return NextResponse.json({status: 400})
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ status: 500 });
  }
}
