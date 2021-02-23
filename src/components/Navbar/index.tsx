import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <h2>NETFLIX</h2>
      <nav>
        <Link to="/">Iniciar</Link>
        <Link to="#">Séries</Link>
        <Link to="#">Filmes</Link>
        <Link to="#">Documentários</Link>
      </nav>
    </Container>
  )
}
