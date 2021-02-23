import styled from 'styled-components';

export const CardContainer = styled.div`
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
  }

  h4 {
    margin: 10px;
  }
`;