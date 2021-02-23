export interface MovieDetailProps {
  id: number;
  title: string; 
  name: string;
  overview: string;
  backdrop_path: string;
  media_type: string;
}

export interface ListProps {
  description: string;
  id: number;
  name: string;
  page: number;
  results: MovieDetailProps[];
}