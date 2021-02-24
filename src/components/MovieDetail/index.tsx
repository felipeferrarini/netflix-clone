import React, { useEffect, useState } from 'react';
import { MovieDetailProps } from '../../props/props';
import { Button } from '../Button';
import { Container } from './styles';
import { FaPlayCircle, FaInfo, FaCheck} from 'react-icons/fa'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { getVideo } from '../../services/api';

interface Props {
  movie?: MovieDetailProps;
  type?: string | undefined;
}

function MovieDetail({ movie, type }: Props) {
  const [video, setVideo] = useState('');
  const router = useHistory();
  const location = useLocation();

  useEffect(() =>{
    getVideo(movie?.id || 1, type || 'movie').then(res=>{
      setVideo(res.results?.find(result=> result?.type === "Trailer")?.key || '');
    })
  },[movie, type])

  return (
    <Container 
      className={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
    >
      <div className="container">
        <h3 className="title">{type === 'movie' ? movie?.title : movie?.title}</h3>
        <p className="description">{movie?.overview}</p>

        {location.pathname === '/' ? (
          <div className="botoes">
            <Button 
              className="active" 
              type="button"
            >
              <FaPlayCircle/>
              <a 
                href={`https://www.youtube.com/watch?v=${video}`}
                target="_blank"
                rel="noreferrer"
              >
                Assistir
              </a>
            </Button>

            <Button type="button" onClick={()=>router.push(`/${type === undefined ? 'movie' : type}/${movie?.id}`)}>
              <FaInfo/>
              Mais informações
            </Button>
          </div>
        ) : (
          <div className="info">
            <Button className="active" type="button">
              <FaPlayCircle/>
              <a 
                href={`https://www.youtube.com/watch?v=${video}`}
                target="_blank"
                rel="noreferrer"
              >
                Assistir
              </a>
            </Button>
            <Button type="button" onClick={()=>router.push(`/${type === undefined ? 'movie' : type}/${movie?.id}`)}>
              <FaCheck/>
              Já assisti
            </Button>
            <div>
              <p>
                {`Relevancia ${(movie?.vote_average || 10) * 10}%`}
              </p>
              <p>
                {`Data de Lançamento: ${movie?.release_date}`}
              </p>
            </div>
            
          </div>
        )}

        
      </div>

    </Container>
  );
}

export default MovieDetail;