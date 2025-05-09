import Link from 'next/link';
/* import '../styles/globals.css'; */
/* import Image from 'next/image' */
import CardPoster from "./CardPoster";


export default function MovieSetupMain() {
  return (
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
        <CardPoster title={'Terminator'} img={"/path/to/seats.png"}
          width={200} height={200} description={"AWESOME MOVIE"}/>
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
