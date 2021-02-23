import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MovieDetailProps } from '../../props/props';

import { CardContainer } from './styles';

interface Props {
  movies?: MovieDetailProps[];
}

function Card(movie: MovieDetailProps) {
  const handleDragStart = (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault();

  return(
    <CardContainer 
      className={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
      onDragStart={handleDragStart}
      to={`/${movie.media_type}/${movie.id}`}
      onClickCapture={handleClick}
    >
      <div className="info">
        <h4>{movie.title}</h4>
      </div>
    </CardContainer>
  );
}

function CarouselList({movies} :Props) {

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    900: { items: 4 },
    1100: { items: 5 },
    1440: { items: 6 },
  };

  const items = movies?.map((movie) => <Card {...movie}/>)

  return (
    <AliceCarousel 
      mouseTracking items={items} 
      responsive={responsive}
      infinite
      autoHeight={true}
      disableButtonsControls
      disableDotsControls
    />
  );
}

export default CarouselList;