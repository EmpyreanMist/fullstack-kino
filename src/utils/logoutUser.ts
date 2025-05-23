import { createClient } from '@/lib/supabase/server';

export async function logoutUser(): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
