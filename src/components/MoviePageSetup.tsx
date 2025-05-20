"use client";

import Link from 'next/link';
import '../styles/globals.css';
/* import Image from 'next/image' */
import CardPoster from './CardPoster';
import { useState, useEffect } from 'react';

type Movie = {
  _id: string;
  imdbId: string;
  title: string;
  year: string;
  rating: string;
  runtime: number;
  trailer: string;
  plot: string;
  poster: string;
  genre: string[];
  cast: {
    name: string;
    character: string;
    image: string;
  }[];
};

export default function MovieSetupMain() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number | 1>(1);
  const [totalPages, setTotalPages] = useState<number | 1>(1);

  useEffect(()=> {
    const fetchMovies = async () => {
      const res = await fetch(`/api/movies?page=${page}`);
      const data = await res.json();
      setMovies(data.movies);
      setTotalPages(data.totalPages);
    };
    fetchMovies();
  }, [page]);


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
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-2">
            Comedy
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-3" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-3">
            Horror
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-4" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-4">
            Romantic
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-5" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-5">
            Foo
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-6" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-6">
            Foo
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-7" />
          <label className="btn btn-primary hover-shadow" htmlFor="btn-check-7">
            Foo
          </label>
        </section>
        <section>
          <div className="dropdown d-flex justify-content-center pt-5">
            <Link
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Rating
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Release date
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className="d-flex flex-wrap justify-content-center gap-4 mx-auto container-80">
        {movies.map(movie => (
          <CardPoster
            key={movie._id}
            title={movie.title}
            img={movie.poster}
            width={200}
            height={300}
            genres={movie.genre}
            id={movie._id}
          />
        ))}
      </section>
      <div className="d-flex justify-content-center pt-5 pb-2">
        <nav className="d-block m-auto" aria-label="...">
<ul className="pagination">
  {/* Previous-knapp */}
  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
    <button
      className="page-link"
      onClick={() => setPage((p) => Math.max(1, p - 1))}
      disabled={page === 1}
    >
      Previous
    </button>
  </li>

  {/* Sidnummer */}
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
    <li key={pageNum} className={`page-item ${page === pageNum ? 'active' : ''}`}>
      <button className="page-link" onClick={() => setPage(pageNum)}>
        {pageNum}
      </button>
    </li>
  ))}

  {/* Next-knapp */}
  <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
    <button
      className="page-link"
      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
      disabled={page === totalPages}
    >
      Next
    </button>
  </li>
</ul>

        </nav>
      </div>
    </main>
  );
}
