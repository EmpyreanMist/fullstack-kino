import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/supabaseClient';

export async function POST(req: Request) {
  try {
    const { fullName, email, password, birthDateString, phone, city } = await req.json();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
          phone,
        },
      },
    });

    if (error || data.user == null) {
      return NextResponse.json(
        { error: error?.message ?? 'Kunde inte skapa konto' },
        { status: 400 }
      );
    }

    const { error: insertError } = await supabase.from('Users').insert({
      id: data.user.id,
      full_name: fullName,
      birthdate: birthDateString,
      phone,
      city,
      email,
    });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Användare skapad', userId: data.user.id },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Något gick fel' }, { status: 500 });
  }
}
