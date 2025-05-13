'use client';
import React, { useState, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

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

  const loginWithCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWarning('');
    setSuccess(false);
    try {
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

      setSuccess(true);
      setUser(data.session.user);
    } catch (error) {
      if (error instanceof Error) {
        setWarning(error.message);
      } else {
        setWarning('Okänt fel vid inloggning');
      }
    }
  };

  //logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error);
    } else {
      console.log('Du är utloggad');
      setUser(null);
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
    <form onSubmit={loginWithCredentials}>
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
