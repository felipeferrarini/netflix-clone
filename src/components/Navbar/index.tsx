import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Form } from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Navbar() {
  const query = useQuery();
  const [search, setSearch] = useState(query.get('q') || '');
  const history = useHistory();

  useEffect(()=>{
    setSearch(query.get('q') || '');
  }, [query.get('q')])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    history.push(`/search?q=${search}`);
  }

  return (
    <Container>
      <Link to="/">
        <h2>NETFLIX</h2>
      </Link>

      <Form onSubmit={handleSubmit}>
        <FaSearch/>
        <input 
          onChange={(e)=>setSearch(e.target.value)} 
          type="text"
          value={search}
          placeholder="Pesquise filmes, séries, e muito mais!"
        />
      </Form>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="#">Séries</Link>
        <Link to="#">Filmes</Link>
        <Link to="#">Documentários</Link>
      </nav>
    </Container>
  )
}
