'use client';

import '../styles/globals.css';
import CardPoster from './CardPoster';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type Movie = {
  _id: string;
  title: string;
  poster: string;
  year: string;
  rating: string;
  genre: string[];
};

export default function MovieSetupMain() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [sort, setSort] = useState('');
  const [genreSelection, setGenreSelection] = useState<string[]>([]);
  const [loader, setLoader] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlPage: number = parseInt(searchParams.get('page') || '1', 10);
    const urlSearch: string = searchParams.get('search') || '';
    const urlGenres: string = searchParams.get('genre') || '';
    const urlSort: string = searchParams.get('sort') || '';

    setPage(urlPage);
    setSearch(urlSearch);
    setGenres(urlGenres ? urlGenres.split(',') : []);
    setSort(urlSort);
  }, [searchParams]);

  // Hämta alla genrar från api:n
  useEffect(() => {
    const fetchGenre = async () => {
      const res = await fetch('api/movies/genre');
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      const genreData = await res.json();
      setGenreSelection(genreData.genres);
    };
    fetchGenre();
  }, []);

  // Fetch från API baserat på search, genre, sort, page
  useEffect(() => {
    const fetchMovies = async () => {
      setLoader(true);
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (genres.length > 0) params.set('genre', genres.join(','));
      if (sort) params.set('sort', sort);
      params.set('page', page.toString());

      const res = await fetch(`/api/movies?${params.toString()}`);
      const data = await res.json();
      setMovies(data.movies);
      setTotalPages(data.totalPages);
      setLoader(false);
    };
    fetchMovies();
  }, [search, genres, sort, page]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (genres.length > 0) params.set('genre', genres.join(','));
    if (sort) params.set('sort', sort);

    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [search, genres, sort, page, router]);

  const handleGenreToggle = (genre: string) => {
    setPage(1);
    setGenres(prev => (prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]));
  };

  return (
    <main className="bg-dark">
      <div className="p-5">
        <h1 className="text-white text-center pt-5 pb-5">Boka in ditt biobesök hos oss</h1>

        <div className="bg-dark d-flex justify-content-center pb-4">
          <div className="position-relative w-50">
            <input
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setPage(1);
              }}
              type="text"
              className="form-control rounded-pill pe-5"
              placeholder="Sök..."
            />
          </div>
        </div>

        {/* Genrefilter */}
        <section className="d-flex justify-content-center flex-wrap gap-2 pb-3">
          {genreSelection.map(genre => (
            <button
              key={genre}
              onClick={() => handleGenreToggle(genre)}
              className={`btn btn-${genres.includes(genre) ? 'primary' : 'outline-primary'}`}
            >
              {genre}
            </button>
          ))}
        </section>

        {/* Sortering */}
        <div className="dropdown d-flex justify-content-center pt-3">
          <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
            Sortera efter
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={() => setSort('highest-rating')}>
                Högst betyg
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setSort('lowest-rating')}>
                Lägst betyg
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setSort('release-rating')}>
                Senaste filmer
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setSort('')}>
                Inget
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Filmer */}
      <section className="d-flex flex-wrap justify-content-center gap-4 mx-auto container-80">
        {loader ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '300px' }}
          >
            <div
              className="spinner-border text-light"
              style={{ width: '5rem', height: '5rem' }}
              role="status"
            >
              <span className="visually-hidden">Laddar...</span>
            </div>
          </div>
        ) : (
          movies.map(movie => (
            <CardPoster
              key={movie._id}
              title={movie.title}
              img={movie.poster}
              width={200}
              height={300}
              genres={movie.genre}
              id={movie._id}
              rating={parseFloat(movie.rating.slice(0, 3))}
            />
          ))
        )}
      </section>

      {/* Paginering */}
      <div className="d-flex justify-content-center pt-5 pb-2">
        <nav aria-label="Pagination">
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setPage(p => Math.max(1, p - 1))}>
                Föregående
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <li key={p} className={`page-item ${p === page ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setPage(p)}>
                  {p}
                </button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              >
                Nästa
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
