import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import ClientLayoutWrapper from './ClientLayoutWrapper';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: 'Kino',
  description: 'Världens bästa biograf!',
  icons: {
    icon: '/popcorn.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
