import axios from 'axios';
import { ListProps, ResultVideo } from '../props/props';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org'
});

export function getList(id: number){

  const params = {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'pt-BR',
    sort_by: 'release_date.desc'
  }

  const data: Promise<ListProps> = api.get(`/4/list/${id}`, {params})
  .then((response)=>{
    return response.data;
  })
  .catch(error => {
    console.log(error);
    return {};
  });

  return data;
}

export function getRecomender(id: number){

  const params = {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'pt-BR',
    page:1
  }

  const data: Promise<ListProps> = api.get(`/3/movie/${id}/similar`, {params})
  .then((response)=>{
    return response.data;
  })
  .catch(error => {
    console.log(error);
    return {};
  });

  return data;
}

export function getDiscover() {
  const params = {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    page: 1,
    language: 'pt-BR',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false
  }

  const data: Promise<ListProps> = api.get('/3/discover/movie', {params})
  .then((response)=>{
    return response.data;
  })
  .catch(error => {
    console.log(error);
    return {};
  });

  return data;
}

export function getSearch(query: string | null, page: string | null){

  const params = {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'pt-BR',
    query,
    include_adult: false,
    page: page ? page : 1
  }

  const data: Promise<ListProps> = api.get(`/3/search/movie`, {params})
  .then((response)=>{
    return response.data;
  })
  .catch(error => {
    console.log(error);
    return {};
  });

  return data;
}

export function getVideo(id: number | null | undefined, type: string | null | undefined){

  const params = {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'pt-BR'
  }

  const data: Promise<ResultVideo> = api.get(`/3/${type}/${id}/videos`, {params})
  .then((response)=>{
    return response.data;
  })
  .catch(error => {
    console.log(error);
    return {};
  });

  return data;
}