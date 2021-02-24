import React from 'react';
import { MovieDetailProps } from '../../props/props';
import { Button } from '../Button';
import { Container } from './styles';
import { FaPlayCircle, FaInfo} from 'react-icons/fa'
import {useHistory, useLocation} from 'react-router-dom'

interface Props {
  movie?: MovieDetailProps;
  type?: string | undefined;
}

function MovieDetail({ movie, type }: Props) {

  const router = useHistory();
  const location = useLocation();

  return (
    <Container 
      className={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
    >
      <div className="container">
        <h3 className="title">{type === 'movie' ? movie?.title : movie?.title}</h3>
        <p className="description">{movie?.overview}</p>

        {location.pathname === '/' ? (
          <div className="botoes">
            <Button className="active" type="button">
              <FaPlayCircle/>
              Assistir
            </Button>

            <Button type="button" onClick={()=>router.push(`/${type === undefined ? 'movie' : type}/${movie?.id}`)}>
              <FaInfo/>
              Mais informações
            </Button>
          </div>
        ) : (
          <div className="info">
            <p>
              {`Relevancia ${(movie?.vote_average || 10) * 10}%`}
            </p>
            <p>
              {`Data de Lançamento: ${movie?.release_date}`}
            </p>
          </div>
        )}

        
      </div>

    </Container>
  );
}

export default MovieDetail;