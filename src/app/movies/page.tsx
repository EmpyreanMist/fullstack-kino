import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MoviesPage() {
  return (
    <>
      <Header />
      <main className='bg-dark'>
        <div>
          <h1 className='text-white'>Boka in ditt biobesök hos oss</h1>

          <section>{/* Filter */}</section>
        </div>
        <section className='d-flex flex-row p-5'>
            <div className="card bg-dark" style={{ width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white text-center">Card title</h5>
                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary d-block text-center">Köp biljett</a>
                </div>
            </div>
            <div className="card bg-dark" style={{ width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white text-center">Card title</h5>
                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary d-block text-center">Köp biljett</a>
                </div>
            </div>
            <div className="card bg-dark" style={{ width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white text-center">Card title</h5>
                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary d-block text-center">Köp biljett</a>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
