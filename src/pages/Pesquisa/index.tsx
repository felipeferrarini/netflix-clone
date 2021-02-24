import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CarouselList from '../../components/CarouselList';
import { ListProps } from '../../props/props';
import { getSearch } from '../../services/api';
import { Container } from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Pesquisa() {
  const query = useQuery();
  const [result, setResult] = useState<ListProps>();

  useEffect(()=>{
    getSearch(query.get("q"), query.get('page')).then(res=>{
      setResult(res);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get("q")])

  return (
    <Container>
      <h2>{`Mostrando resultados para "${query.get('q')}"`}</h2>
      <CarouselList type="search" result={result} infinite={false}/>
    </Container>
  )
}
