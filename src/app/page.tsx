export const metadata = {
  title: 'Kino | Boka bioupplevelser online',
  description:
    'Utforska aktuella filmer och boka dina biobiljetter smidigt med Kino. Oavsett om du vill se en film online eller på plats – vi har det du söker.',
  openGraph: {
    title: 'Kino | Boka bioupplevelser online',
    description:
      'Se de senaste filmerna, läs recensioner och boka biljetter på Kino – din digitala biograf.',
    url: 'https://fullstack-kino.vercel.app',
    siteName: 'Kino',
    images: [
      {
        url: 'https://fullstack-kino.vercel.app/seats.png',
        width: 1200,
        height: 630,
        alt: 'Kino - för dig som älskar film',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kino | Boka bioupplevelser online',
    description:
      'Se trailers, läs recensioner och boka biljetter direkt via Kino – enkelt och smidigt.',
    images: ['https://fullstack-kino.vercel.app/seats.png'],
  },
};

import HomePage from '@/components/homePage';

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
