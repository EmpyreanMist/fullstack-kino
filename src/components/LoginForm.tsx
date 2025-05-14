'use client';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Fel e-post eller lösenord');
      }

    } catch (err: any) {
      setError(err.message);
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
        onSubmit={handleLogin}
        className="bg-dark p-4 rounded shadow"
        style={{ minWidth: '300px', opacity: 0.95 }}
      >
        <h2 className="text-white mb-4 text-center">Logga in!</h2>

        {error && <div className="alert alert-danger">{error}</div>}

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
