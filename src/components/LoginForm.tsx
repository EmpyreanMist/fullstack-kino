'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client'; // du har denna
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWarning('');

    /* const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    }); */
    try {
      const res = await fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await res.json();
    } catch (error) {
      console.error('Login error:', error);
      setWarning('Fel email eller lösenord');
      return;
    }
  };

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
          <Link href="/register" className="text-white">
            Skapa konto
          </Link>
        </div>
      </form>
    </div>
  );
}
