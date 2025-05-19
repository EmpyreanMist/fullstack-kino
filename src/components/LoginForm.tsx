'use client';
import React, { useState, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';
import { loginWithCredentials } from '@/utils/loginWithCredentials';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWarning('');

    try {
      const user = await loginWithCredentials(email, password);
      setUser(user);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        setWarning(error.message);
      } else {
        setWarning('Okänt fel vid inloggning');
      }
    }
  };

  if (isLoggedIn && user) {
    return (
      <div
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: 'url(/seats.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="bg-dark p-4 rounded shadow text-white text-center"
          style={{ opacity: 0.95 }}
        >
          <h2>Du är redan inloggad</h2>
          <p>Välkommen, {user.user_metadata.fullName}</p>
          <Link href="/" className="btn btn-primary mt-3">
            Gå till startsidan
          </Link>
        </div>
      </div>
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
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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
