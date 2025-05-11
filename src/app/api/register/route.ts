import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const { fullName, email, password, birthDateString, phone, city } = await req.json();
    console.log(fullName, email, password, birthDateString, phone, city);
    //   const { data: existingEmail } = await supabase
    //   .from('Users')
    //   .select('id')
    //   .eq('email', email)
    //   .single();

    //   if (existingEmail) {
    //     return NextResponse.json({ error: 'Emailen är redan registrerad' }, { status: 400 })
    //   }

    //   //check if phonenumber already exist
    //   const { data: existingPhone, error: phoneError } = await supabase
    //   .from('Users')
    //   .select('id')
    //   .eq('phone', phone)
    //   .maybeSingle();

    // if (phoneError) {
    //   console.error('Telefonkontrollfel:', phoneError.message);
    // }

    // if (existingPhone) {
    //   return NextResponse.json({ error: 'Telefonnumret är redan registrerat' }, { status: 400 });
    // }

    const { data, error } = await supabase.auth.signUp({
      email,
      phone,
      password,
      options: {
        data: {
          fullName,
        },
      },
    });

    if (error || data.user == null) {
      return NextResponse.json(
        { error: error?.message ?? 'Kunde inte skapa konto' },
        { status: 400 }
      );
    }

    // const user = data.user;


    // if (!user) {
    //   return NextResponse.json({ error: 'Kunde inte skapa användare' }, { status: 500 });
    // }

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
