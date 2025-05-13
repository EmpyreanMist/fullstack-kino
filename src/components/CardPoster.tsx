import Link from 'next/link';
import '../styles/globals.css';
import Image from 'next/image';

type Props = {
  img: string;
  title: string;
  description: string;
  width: number;
  height: number;
  id: string;
};

export default function CardPoster({ img, title, description, width, height, id }: Props) {
  return (
    <div className="card bg-dark hover-shadow" style={{ width: '18rem' }}>
      <Link href={`movies/${id}`} className="text-decoration-none">
        <Image src={img} className="card-img-top fluid" alt="..." width={width} height={height} />
        <div className="card-body">
          <h5 className="card-title text-white text-center">{title}</h5>
          <p className="card-text text-white">{description}</p>
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
