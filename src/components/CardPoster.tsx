import '../styles/globals.css';
import Image from 'next/image';

type Props = {
  img: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

export default function CardPoster({ img, title, description, width, height }: Props) {
  return (
    <div className="card bg-dark" style={{ width: '18rem' }}>
      <Image src={img} className="card-img-top" alt="..." width={width} height={height} />
      <div className="card-body">
        <h5 className="card-title text-white text-center">{title}</h5>
        <p className="card-text text-white">{description}</p>
        <a href="#" className="btn btn-primary d-block text-center">
          Köp biljett
        </a>
      </div>
    </div>
  );
}
