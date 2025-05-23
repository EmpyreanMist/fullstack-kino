'use client';

import { usePathname } from 'next/navigation';
import ClientBootstrapSetup from '@/lib/ClientBootstrapSetup';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Bakgrundsbild-logik
  const isMovieInfoPath = pathname === '/movieInfo' || pathname.startsWith('/movieInfo/');
  const showImage = !['/login'].includes(pathname) && !isMovieInfoPath;

  // Knapp-logik
  const showLoginButton = pathname !== '/login';
  const showRegisterButton = pathname !== '/login' && pathname !== '/register';

  return (
    <>
      <Header
        showImage={showImage}
        showLoginButton={showLoginButton}
        showRegisterButton={showRegisterButton}
      />
      <ClientBootstrapSetup />
      {children}
      <Footer />
    </>
  );
}
