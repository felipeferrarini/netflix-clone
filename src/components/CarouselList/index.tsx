import React, { useEffect, useState } from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useHistory } from 'react-router-dom';
import { ListProps, MovieDetailProps } from '../../props/props';
import { getDiscover, getList, getRecomender } from '../../services/api';
import { CardContainer, Container } from './styles';

function Card(movie: MovieDetailProps) {
  const router = useHistory();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    if(!e.isDefaultPrevented()) {
      // router.push(`/${movie.media_type === undefined ? 'movie' : movie.media_type}/${movie.id}`);
    }
  }

  return(
    <CardContainer 
      className={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
      onDragStart={handleDragStart}
      onDragExit={handleDragStart}
      onClick={handleClick}
    />
  );
}

interface Props {
  id?: number;
  type: 'list' | 'Recomendados' | 'Destaques' | 'search';
  result?: ListProps;
  infinite?: boolean;
}


function CarouselList({id, type, result, infinite} :Props) {

  const [media, setMedia] = useState<ListProps>();

  useEffect(()=>{
    switch (type){
      case 'list':
        getList(id || 1).then(res => {
          setMedia(res);
        });
        break;
      case 'Recomendados': 
        getRecomender(id || 1).then(res => {
          setMedia(res);
        });
        break;
      case 'Destaques':
        getDiscover().then(res => {
          setMedia(res);
        });
        break;
      case 'search':
        setMedia(result);
        break;
      default:
        break;
    }
  }, [id, type, result]);

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    900: { items: 4 },
    1100: { items: 5 },
    1440: { items: 6 },
  };

  const items = media?.results.map(movie => <Card {...movie}/>)

  const handleChange = (e: EventObject)=>{
    if(e.isNextSlideDisabled){
      items?.push(<div style={{background: '#ff2', height: '100px', width: '100px'}} />)
    }
  }

  return (
    <Container>
      <h3>{type === 'list' ? media?.name : type === 'search' ? '' : type}</h3>
      <AliceCarousel 
        mouseTracking items={items} 
        responsive={responsive}
        infinite={infinite}
        autoHeight={true}
        disableButtonsControls
        disableDotsControls
        onSlideChange={handleChange}
        onSlideChanged={handleChange}
      />
    </Container>
  );
}

export default CarouselList;