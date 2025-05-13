'use client';
import React, { useState, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';
import { loginWithCredentials } from '@/app/utils/loginWithCredentials';
import { logoutUser } from '@/app/utils/logoutUser';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  //login
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        console.log('Du är inloggad');
      } else if (error) {
        console.log('Något gick fel');
      } else {
        console.log('Ingen användare inloggad');
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWarning('');
    setSuccess(false);

    try {
      const user = await loginWithCredentials(email, password);
      setUser(user);
      setSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setWarning(error.message);
      } else {
        setWarning('Okänt fel vid inloggning');
      }
    }
  };

  //Logout
  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log('Du är utloggad');
      setUser(null);
    } catch (error) {
      console.error('Logout error: ', error);
    }
  };

  if (user) {
    return (
      <>
        <p>Du är inloggad som: {user.email}</p>
        <button onClick={handleLogout}>Logga ut</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        required
        id="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        required
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Submit</button>

      {warning && <p style={{ color: 'red' }}>{warning}</p>}
      {success && <p style={{ color: 'green' }}>Login lyckades!</p>}
    </form>
  );
}
