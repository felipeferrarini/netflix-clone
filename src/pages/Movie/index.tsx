import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarouselList from '../../components/CarouselList';
import MovieDetail from '../../components/MovieDetail';
import { MovieDetailProps } from '../../props/props';
import { api } from '../../services/api';
import { Container } from './styles';

interface MovieProps {
  type: string;
  id: string;
}


const Movie: React.FC = () => {
  const {type, id} = useParams<MovieProps>();
  const [media, setMedia] = useState<MovieDetailProps>();

  useEffect(()=>{
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      language: 'pt-BR'
    }

    api.get(`/3/${type}/${id}`, {params})
    .then((response)=>{
      const data = response.data;
      setMedia(data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [type, id]);

  return (
    <Container>
      <MovieDetail movie={ media} type={type}/>
      <CarouselList type="Recomendados" id={Number(id)}/>
    </Container>
  );
}

export default Movie;