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

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width:50%;
  height: 60%;

  @media(max-width: 768px){
    width: 100%;
  }

  svg {
    transform: translateX(150%);
    color: var(--white);

    
    @media(max-width: 768px){
      margin-bottom: 10px;
    }
  }

  input {
    height: 2.8rem;
    width:100%;
    padding-left: 2rem;
    border: 1px solid var(--link);
    background-color: transparent;
    outline: none;
    color: var(--white);
    transition: all 0.2s;
    border-radius: 4px;

    @media(max-width: 768px){
      margin-bottom: 10px;
    }

    :active, :hover {
      border-color: var(--white);
    }
  }
`;