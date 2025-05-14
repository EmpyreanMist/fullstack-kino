import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientBootstrapSetup from '@/lib/ClientBootstrapSetup';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kino',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ClientBootstrapSetup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
