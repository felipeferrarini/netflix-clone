import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
  height: 28rem;
  width: 97%;
  background: url(${props => props.className});
  background-size: cover;
  background-position: center;
  margin: 25px auto;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--background);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media(max-width: 1440px) {
    height: 25rem;
  }

  @media(max-width: 768px) {
    height: 20rem;
  }
  
  :active {
    cursor: grab;
  }

  :hover {
    transition: all 0.2s;
    transform: scale(1.05);
    z-index: 10;

    .info {
      transition: all 0.3s;
      height:40%;
      background: linear-gradient(transparent, var(--black));
    }
  }

  .info{
    height: 30%;
    background: linear-gradient(transparent, var(--background));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.2s;
  }

  h4 {
    margin: 10px;
  }
`;