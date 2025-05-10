import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password, birthDateString, phone, city } = body;

    const { data: existingEmail } = await supabase
    .from('Users')
    .select('id')
    .eq('email', email)
    .single();

    if (existingEmail) {
      return NextResponse.json({ error: 'Emailen är redan registrerad' }, { status: 400 })
    }

    const { data: existingPhone, error: phoneError } = await supabase
    .from('Users')
    .select('id')
    .eq('phone', phone)
    .maybeSingle();
  
  if (phoneError) {
    console.error('Telefonkontrollfel:', phoneError.message);
  }
  
  if (existingPhone) {
    return NextResponse.json({ error: 'Telefonnumret är redan registrerat' }, { status: 400 });
  }
  

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const user = data.user;

    if (!user) {
      return NextResponse.json({ error: 'Kunde inte skapa användare' }, { status: 500 });
    }

    const { error: insertError } = await supabase.from('Users').insert({
      id: user.id,
      full_name: fullName,
      birthdate: birthDateString, 
      phone,
      city,
      email,
    });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Användare skapad', userId: user.id }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Något gick fel' }, { status: 500 });
  }
}
