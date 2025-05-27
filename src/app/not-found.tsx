'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

export default function NotFound() {
  return (
    <main className="bg-dark text-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center p-4">
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_qp1q7mct.json"
        style={{ height: '300px', width: '300px' }}
      />
      <h1 className="display-5 mt-4">404 – Sidan hittades inte</h1>
      <p className="lead">Sidan du försökte nå finns inte eller har flyttats.</p>
      <Link href="/" className="btn btn-primary mt-3">
        Till startsidan
      </Link>
    </main>
  );
}