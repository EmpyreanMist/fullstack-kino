import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import ClientLayoutWrapper from './ClientLayoutWrapper';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: 'Kino',
  description: 'Världens bästa biograf!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
