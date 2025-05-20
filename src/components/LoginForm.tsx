'use client';
import React, { useState, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase/supabaseClient';
import { loginWithCredentials } from '@/utils/loginWithCredentials';
import { logoutUser } from '@/utils/logoutUser';

export default function LoginForm() {
  // for the timer
  const timedEvent: number = 900;
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [seconds, setSeconds] = useState<number>(timedEvent);
  const [loading, setLoading] = useState<boolean>(true);

  
  // Kontrollera om användaren redan är inloggad
useEffect(() => {
  const fetchUser = async () => {
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !sessionData.session) {
        console.log('Ingen session aktiv');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Fel vid hämtning av användare:', error.message);
      } else if (data?.user) {
        setUser(data.user);
        console.log('Du är inloggad');
      }
    } catch (err) {
      console.error('Ovntat fel:', err);
    } finally {
      setLoading(false);
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

  const handleLogout = async () => {
    try {
      await logoutUser();
      setEmail('');
      setPassword('');
      setSeconds(timedEvent);
      setSuccess(false);
      setWarning('');
      setUser(null);
    } catch (error) {
      console.error('Logout error: ', error);
    }
  };

  
  

  // Timer + aktivitet
  useEffect(() => {
    if (user !== null) {
      /* setSeconds(12); */
      const resetTimer = () => setSeconds(timedEvent);

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

  // Logga ut automatiskt
  useEffect(() => {
    if (seconds === 0 && user !== null) {
      (async () => {
        await logoutUser();
        setUser(null);
        setEmail('');
        setSuccess(false);
        setPassword('');
        setSeconds(timedEvent);
      })();
    }
  }, [seconds, user]);

  // useEffect för att dölja "Login lyckades!" efter 2 sekunder
useEffect(() => {
  if (success) {
    const timer = setTimeout(() => setSuccess(false), 2000);
    return () => clearTimeout(timer);
  }
}, [success]);


  // 🌀 Visa loader medan vi väntar på auth
  if (loading) {
    return (
      <div className="spinner-border text-primary d-block mx-auto" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    );
  }

  // Inloggat läge
  if (user) {
    return (
      <>
        <p>Du är inloggad som: {user.user_metadata.fullName}</p>
        {success && (
          <div className="alert alert-success mt-2 text-center" role="alert">
            Inloggning lyckades!
          </div>
        )}
        <button onClick={handleLogout}>Logga ut</button>
        {seconds <= 10 && <p>Du loggas ut om {seconds} sekunder på grund av inaktivitet</p>}
      </>
    );
  }

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: 'url(/seats.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-dark p-4 rounded shadow"
        style={{ minWidth: '300px', opacity: 0.95 }}
      >
        <h2 className="text-white mb-4 text-center">Logga in!</h2>

        {warning && <div className="alert alert-danger">{warning}</div>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            E-postadress
          </label>
          <input
            type="email"
            id="email"
            className="form-control bg-secondary text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Lösenord
          </label>
          <input
            type="password"
            id="password"
            className="form-control bg-secondary text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Logga in
        </button>

        <div className="mt-3 text-center">
          <a href="/register" className="text-white">
            Skapa konto
          </a>
        </div>
      </form>
    </div>
  );
}
