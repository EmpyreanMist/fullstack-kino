import MovieInfoSetup from '@/components/MovieInfoSetup';
import { Suspense } from 'react';

export default function Page() {
  <Suspense fallback={<div className="text-center mt-5">Loading movie redirect...</div>}>
    <MovieInfoSetup />;
  </Suspense>;
}
