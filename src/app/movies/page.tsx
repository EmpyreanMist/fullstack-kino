import { Suspense } from 'react';
import MovieSetupMain from '@/components/MoviePageSetup';

export default function MoviesPage() {
  return (
    <Suspense fallback={<div>Laddar filmer...</div>}>
      <MovieSetupMain />
    </Suspense>
  );
}
