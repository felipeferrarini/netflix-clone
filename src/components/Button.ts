import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(0,0,0,.5);
  border: none;
  color: var(--white);

  padding: 15px 30px;
  margin: 10px;
  font-size: 1rem;
  transition: 0.2s all;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: var(--white);
    color: var(--black);
  }

  svg {
    margin-right: 5px;
  }
`;
