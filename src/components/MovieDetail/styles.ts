import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)100%),  url(${props => props.className});
  background-size: cover;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 35px;

  .container {
    margin-left: 2rem;
    max-width: 80%;

    @media(max-width: 768px) {
      max-width: 90%;
    }
  }

  .title {
    font-size: 4.5rem;
    margin-top: 15%;
  }

  .description {
    margin-top: 10px;
    margin-bottom:2.5rem;

    @media(min-width: 1000px){
      width: 70%;
    }
  }

  .botoes {
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    @media(max-width: 525px) {
      flex-direction: column;
    }
  }
`;
