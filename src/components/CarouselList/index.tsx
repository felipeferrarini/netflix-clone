import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaInfo } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { ListProps, MovieDetailProps } from '../../props/props';
import { getDiscover, getList, getRecomender } from '../../services/api';
import { Button } from '../Button';
import { CardContainer, Container } from './styles';

function Card(movie: MovieDetailProps) {
  const router = useHistory();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return(
    <CardContainer 
      className={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
      onDrag={handleDragStart}
    >
      <Button 
        type="button" 
        onClick={()=>router.push(`/${movie.media_type === undefined ? 'movie' : movie.media_type}/${movie?.id}`)}
      >
        <FaInfo/>
      </Button>
    </CardContainer>
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
  const [isChanging, setIsChanging] = useState(false);

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

  return (
    <Container>
      <span>{String(isChanging)}</span>
      <h3>{type === 'list' ? media?.name : type === 'search' ? '' : type}</h3>
      <AliceCarousel 
        mouseTracking items={items} 
        responsive={responsive}
        infinite={infinite}
        autoHeight={true}
        disableButtonsControls
        disableDotsControls
      />
    </Container>
  );
}

export default CarouselList;