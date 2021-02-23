import React from 'react';
import { MovieDetailProps } from '../../props/props';
import { Button } from '../Button';
import { Container } from './styles';
import { FaPlayCircle, FaInfo} from 'react-icons/fa'

interface Props {
  movie?: MovieDetailProps;
  type?: string;
}

function MovieDetail({ movie, type }: Props) {

  return (
    <Container 
      className={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
    >
      <div className="container">
        <h3 className="title">{type === 'movie' ? movie?.title : movie?.name}</h3>
        <p className="description">{movie?.overview}</p>
      
        <div className="botoes">
          <Button type="button">
            <FaPlayCircle/>
            Assistir agora
          </Button>

          <Button type="button">
            <FaInfo/>
            Mais informações
          </Button>
        </div>
      </div>

    </Container>
  );
}

export default MovieDetail;