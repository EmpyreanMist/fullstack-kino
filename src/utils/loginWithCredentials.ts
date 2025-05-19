import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export async function loginWithCredentials(email: string, password: string): Promise<User> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Något gick fel');
  }

  const { error: sessionError } = await supabase.auth.setSession({
    access_token: data.session.access_token,
    refresh_token: data.session.refresh_token,
  });

  if (sessionError) {
    throw new Error('Kunde inte spara sessionen lokalt');
  }

  return data.session.user;
}
