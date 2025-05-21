import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
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

    if (error || !data.user) {
      return NextResponse.json(
        { error: error?.message ?? 'Registrering misslyckades' },
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
    return NextResponse.json({ error: 'Internt serverfel' }, { status: 500 });
  }
}
