import Link from 'next/link';
import '../styles/globals.css';
import Image from 'next/image';

type Props = {
  img: string;
  title: string;
  genres?: string[]; 
  width: number;
  height: number;
  id: string;
};

export default function CardPoster({ img, title, genres, width, height, id }: Props) {
  return (
    <div className="card bg-dark hover-shadow" style={{ width: '18rem' }}>
      <Link href={`/movieInfo`} className="text-decoration-none">
        <Image src={img} className="card-img-top fluid object-fit-fill" alt="..." width={width} height={height} />
        <div className="card-body">
          <h5 className="card-title text-white text-center">{title}</h5>

          {genres && genres.length > 0 && (
            <div className="d-flex flex-wrap justify-content-start mx-auto" style={{ width: '90%' }}>
              {genres.map((genre, index) => (
                <span key={index} className="badge bg-secondary text-white me-1 mb-1" style={{ fontSize: '12px' }}>
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
      <div className="card-footer bg-transparent border-top-0">
        <Link href={`/movies/book/${id}`} className="btn btn-primary d-block mx-auto">
          Köp biljett
        </Link>
      </div>
    </div>
  );
}
