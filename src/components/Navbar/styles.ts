import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  h2 {
    color: var(--red);
    font-weight: 800;
    font-size: 4rem;
    margin-left: 5px;
  }

  a {
    color: var(--link);
    margin-right: 10px;
    transition: 0.2s all;

    :hover {
      color: var(--white);
    }
   }
`;
