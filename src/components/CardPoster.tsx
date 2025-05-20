import Link from 'next/link';
import '../styles/globals.css';
import Image from 'next/image';

type Props = {
  img: string;
  title: string;
  genres: string[];
  width: number;
  height: number;
  id: string;
};

export default function CardPoster({ img, title, genres, width, height, id }: Props) {
  return (
    <div className="card bg-dark hover-shadow" style={{ width: '18rem' }}>
      <Link href={`movies/${id}`} className="text-decoration-none">
        <Image src={img} className="card-img-top fluid object-fit-fill" alt="..." width={width} height={height} />
        <div className="card-body">
          <h5 className="card-title text-white text-center">{title}</h5>
          <div className="d-flex flex-wrap justify-content-start card-text text-white badge bg-secondary mx-auto" style={{ width: '90%'}}>
            {genres.map((genre, index) => {
              return (
                <span key={index} className="badge" style={{ fontSize: '12px'}}>
                  {genre}
                </span>
              );
          })}</div>
        </div>
      </Link>
      <div className="card-footer bg-transparent border-top-0">
        <Link href={`movies/book/${id}`} className="btn btn-primary d-block mx-auto">
          Köp biljett
        </Link>
      </div>
    </div>
  );
}
