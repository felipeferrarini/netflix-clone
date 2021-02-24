import React, { useEffect, useState } from 'react';
import CarouselList from '../../components/CarouselList';
import MovieDetail from '../../components/MovieDetail';
import { ListProps } from '../../props/props';
import {getDiscover } from '../../services/api';
import { Container } from './styles';

const Home: React.FC = () => {
  const [media, setMedia] = useState<ListProps>();

  useEffect(()=>{
    getDiscover().then(res => {
      setMedia(res)
    })
  }, []);

  return (
    <Container>
      <MovieDetail movie={ media?.results[Number((Math.random() * 10).toFixed(0))]} type={media?.results[0].media_type}/>
      <CarouselList type={'Destaques'}/>
      <CarouselList id={5} type={'list'}/>
      <CarouselList id={1} type={'list'}/>
      <CarouselList id={3} type={'list'}/>
    </Container>
  );
}

export default Home;