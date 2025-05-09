import Link from 'next/link';
import '../styles/globals.css';
/* import Image from 'next/image' */
import CardPoster from './CardPoster';

export default function MovieSetupMain() {
  return (
    <main className="bg-dark border-bottom">
      <div className="p-5">
        <h1 className="text-white text-center pt-5 pb-5">Boka in ditt biobesök hos oss</h1>
        <div
          className="bg-dark d-flex justify-content-center align-items-center pb-4"
        >
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
          <input type="checkbox" className="btn-check primary" id="btn-check-2" checked />
          <label className="btn btn-primary" htmlFor="btn-check-2">
            Comedy
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-3" checked />
          <label className="btn btn-primary" htmlFor="btn-check-3">
            Horror
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-4" checked />
          <label className="btn btn-primary" htmlFor="btn-check-4">
            Romantic
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-5" checked />
          <label className="btn btn-primary" htmlFor="btn-check-5">
            Foo
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-6" checked />
          <label className="btn btn-primary" htmlFor="btn-check-6">
            Foo
          </label>
          <input type="checkbox" className="btn-check" id="btn-check-7" checked />
          <label className="btn btn-primary" htmlFor="btn-check-7">
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
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE precis vad jag tänkte'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE afasdasf sasf asdfasgas df asgdsa fgs ggsadfasf asdf '}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'Movie description will go here in the future'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
        <CardPoster
          title={'Terminator'}
          img={'/seats.png'}
          width={200}
          height={200}
          description={'AWESOME MOVIE'}
          id={'#'}
        />
      </section>
      <nav className="d-block m-auto w-50" aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li className="page-item active">
            <span className="page-link">2</span>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
