import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Link from 'next/link';
import '../styles/globals.css';

export default function MoviesPage() {
  return (
    <>
      <Header />
      <main className="bg-dark border-bottom">
        <div>
          <h1 className="text-white text-center pt-5 pb-5">Boka in ditt biobesök hos oss</h1>

          <section>
            <div className="dropdown">
              <Link
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
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
        <section className="d-flex flex-wrap justify-content-evenly gap-4 mb-5">
          <Link href="/" className="text-decoration-none hover-shadow">
            <div className="card bg-dark" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up the bulk of the
                  card’s content.
                </p>
                <a href="#" className="btn btn-primary d-block text-center">
                  Köp biljett
                </a>
              </div>
            </div>
          </Link>
          <Link href="/id" className="text-decoration-none hover-shadow">
            <div className="card bg-dark" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up the bulk of the
                  card’s content.
                </p>
                <a href="#" className="btn btn-primary d-block text-center">
                  Köp biljett
                </a>
              </div>
            </div>
          </Link>
          <Link href="/" className="text-decoration-none hover-shadow">
            <div className="card bg-dark" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up the bulk of the
                  card’s content.
                </p>
                <a href="#" className="btn btn-primary d-block text-center">
                  Köp biljett
                </a>
              </div>
            </div>
          </Link>
          <Link href="/" className="text-decoration-none hover-shadow">
            <div className="card bg-dark" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up the bulk of the
                  card’s content.
                </p>
                <a href="#" className="btn btn-primary d-block text-center">
                  Köp biljett
                </a>
              </div>
            </div>
          </Link>
          <Link href="/" className="text-decoration-none hover-shadow">
            <div className="card bg-dark" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up the bulk of the
                  card’s content.
                </p>
                <a href="#" className="btn btn-primary d-block text-center">
                  Köp biljett
                </a>
              </div>
            </div>
          </Link>
          <Link href="/" className="text-decoration-none hover-shadow">
            <div className="card bg-dark" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white text-center">Card title</h5>
                <p className="card-text text-white">
                  Some quick example text to build on the card title and make up the bulk of the
                  card’s content.
                </p>
                <a href="#" className="btn btn-primary d-block text-center">
                  Köp biljett
                </a>
              </div>
            </div>
          </Link>
        </section>
        <nav className="d-block m-auto w-50" aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
