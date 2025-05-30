'use client';
import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const movieId = searchParams.get('id');

  // Redirect to dynamic route if movieId is present in query params
  useEffect(() => {
    if (movieId) {
      router.replace(`/movieInfo/${movieId}`);
    }
  }, [movieId, router]);

  // If there's no movieId at all, show a friendly message
  return (
    <>
      <div className="container mt-5 text-center">
        <div className="alert alert-info">
          <h3>No Movie Selected</h3>
          <p>
            Go to the{' '}
            <a href="/movies" className="alert-link">
              Movies page
            </a>{' '}
            and select a movie to view details.
          </p>
        </div>
      </div>
    </>
  );
}
