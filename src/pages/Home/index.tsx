import React, { useEffect, useState } from 'react';
import CarouselList from '../../components/CarouselList';
import MovieDetail from '../../components/MovieDetail';
import { ListProps } from '../../props/props';
import { api } from '../../services/api';
import { Container } from './styles';

const Home: React.FC = () => {
  const id = 5;
  const [media, setMedia] = useState<ListProps>();

  useEffect(()=>{
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      language: 'pt-BR',
      sort_by: 'release_date.desc'
    }

    api.get(`/4/list/${id}`, {params})
    .then((response)=>{
      const data = response.data;
      setMedia(data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Container>
      <MovieDetail movie={ media?.results[0]} type={media?.results[0].media_type}/>
      <CarouselList movies={media?.results}/>
    </Container>
  );
}

export default Home;