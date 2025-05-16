import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'Kino',
  description: '',
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
