'use client';

import Navigation from './Navbar'; // nu OK!
import logoHead from '../../public/logoHead.png';
import seats from '../../public/seats.png';
import Image from 'next/image';
import Link from 'next/link';
import type HeaderProps from '@/lib/typesHeader';

export default function Header({
  showImage = true,
  showLoginButton = true,
  showRegisterButton = true,
}: HeaderProps) {
  return (
    <header className="bg-dark position-relative">
      <Link href="/">
        <Image src={logoHead} alt="Kino-logo" className="d-block mx-auto img-fluid" />
      </Link>

      <Navigation showRegisterButton={showRegisterButton} showLoginButton={showLoginButton} />

      {showImage && (
        <Image
          src={seats}
          alt="Kino-bild"
          className="w-100"
          style={{
            objectFit: 'cover',
            height: '400px',
          }}
        />
      )}
    </header>
  );
}
