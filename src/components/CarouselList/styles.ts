import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    margin-left: 2rem;
    margin-top:10px;
    font-size: 1.2rem;
  }
`;

export const CardContainer = styled.div`
  height: 28rem;
  width: 97%;
  background: url(${props => props.className});
  background-size: cover;
  background-position: center;
  margin: 10px auto;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--background);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

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

  button{
    width: fit-content;
    background-color: var(--gray);
    padding: 15px 15px;

    svg {
      margin:0;
      font-size: 15px;
    }
  }
`;