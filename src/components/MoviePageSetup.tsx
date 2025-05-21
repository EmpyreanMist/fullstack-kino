'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import CardPoster from './CardPoster';


type Movie = {
  _id: string;
  title: string;
  poster: string;
  plot: string;
  imdbId: string;
  year?: string;
  rating?: string;
};


export default function MovieSetupMain() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('/api/movies');
        const data: Movie[] = await res.json();
        setMovies(data);
        console.log('Filmer från API:', data);

      } catch (error) {
        console.error('Fel vid hämtning av filmer:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className="bg-dark">
      <div className="p-5">
        <h1 className="text-white text-center pt-5 pb-5">Boka in ditt biobesök hos oss</h1>
        <div className="bg-dark d-flex justify-content-center align-items-center pb-4">
          <div className="position-relative">
            <input
              type="text"
              className="form-control rounded-pill search-bar pe-5"
              placeholder="Sök..."
              aria-label="Search"
            />
            <button className="btn position-absolute top-50 end-0 translate-middle-y" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>

        <section className="d-flex justify-content-center mx-auto gap-2 flex-wrap">
          <input type="checkbox" className="btn-check primary" id="btn-check-2" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-2">Comedy</label>

          <input type="checkbox" className="btn-check" id="btn-check-3" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-3">Horror</label>

          <input type="checkbox" className="btn-check" id="btn-check-4" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-4">Romantic</label>

          <input type="checkbox" className="btn-check" id="btn-check-5" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-5">Drama</label>

          <input type="checkbox" className="btn-check" id="btn-check-6" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-6">Action</label>

          <input type="checkbox" className="btn-check" id="btn-check-7" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-7">Sci-Fi</label>
        </section>

        <section>
          <div className="dropdown d-flex justify-content-center pt-5">
            <Link className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort by
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#">Rating</Link></li>
              <li><Link className="dropdown-item" href="#">Release date</Link></li>
              <li><Link className="dropdown-item" href="#">Name</Link></li>
            </ul>
          </div>
        </section>
      </div>

      <section className="d-flex flex-wrap justify-content-center gap-4 mx-auto container-80">

        {loading ? (
          <p className="text-white">Laddar filmer...</p>
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <CardPoster
              key={movie._id}
              title={movie.title}
              img={movie.poster}
              width={200}
              height={200}
              description={movie.plot}
              id={movie.imdbId}
            />
          ))
        ) : (
          <p className="text-white">Inga filmer hittades.</p>
        )}

      </section>

      <div className="d-flex justify-content-center pt-5 pb-2">
        <nav className="d-block m-auto" aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled"><span className="page-link">Previous</span></li>
            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
            <li className="page-item active"><span className="page-link">2</span></li>
            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
            <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
