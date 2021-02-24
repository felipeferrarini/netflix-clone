export interface MovieDetailProps {
  id: number;
  title: string; 
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  vote_average: number;
  release_date: Date;
}

export interface ListProps {
  description: string;
  id: number;
  name: string;
  page: number;
  results: MovieDetailProps[];
}