import Navigation from './Navbar';
import logoHead from '../../public/logoHead.png';
import seats from '../../public/seats.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-dark">
      <Link href="/">
        <Image src={logoHead} alt="Kino-logo" className="d-block mx-auto img-fluid" />
      </Link>
      <Navigation />
      <Image
        src={seats}
        alt="Kino-logo"
        className="w-100"
        style={{ objectFit: 'cover', height: '400px', position: 'relative' }}
      />
    </header>
  );
}
