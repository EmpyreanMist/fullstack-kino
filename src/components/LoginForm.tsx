'use client';
import React, { useState, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';
import { loginWithCredentials } from '@/utils/loginWithCredentials';
import { logoutUser } from '@/utils/logoutUser';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [seconds, setSeconds] = useState<number>(12);

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
      setEmail('');
      setPassword('');
      setSeconds(20);
      setSuccess(false);
      setWarning('');
      setUser(null);

      console.log('Du är utloggad');
    } catch (error) {
      console.error('Logout error: ', error);
    }
  };

  // Start timer and event listeners when user is logged in
  useEffect(() => {
    if (user !== null) {
      setSeconds(12);
      const resetTimer = () => setSeconds(10);

      const interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);

      window.addEventListener('mousemove', resetTimer);
      window.addEventListener('keydown', resetTimer);

      return () => {
        clearInterval(interval);
        window.removeEventListener('mousemove', resetTimer);
        window.removeEventListener('keydown', resetTimer);
      };
    }
  }, [user]);

  // logic when seconds reaches 0.
  useEffect(() => {
    if (seconds === 0 && user !== null) {
      (async () => {
        await logoutUser();
        setUser(null);
        setEmail('');
        setSuccess(false);
        setPassword('');
        setSeconds(12);
      })();
    }
  }, [seconds, user]);

if (user) {
  return (
    <>
      <p>Du är inloggad som: {user.email}</p>
      {success && <p style={{ color: 'green' }}>Login lyckades!</p>}
      <button onClick={handleLogout}>Logga ut</button>
      {seconds <= 10 && (
        <p>Du loggas ut om {seconds} sekunder på grund av inaktivitet</p>
      )}
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

      {warning && <p style={{ color: 'red' }}>Något gick fel!</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
