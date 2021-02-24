import styled from 'styled-components';

export const Button = styled.button`
  background-color:${props => props.className === 'active' ? 'var(--white)' : 'var(--gray)'};
  border: none;
  color: ${props => props.className === 'active' ? 'var(--black)' : 'var(--white)'};

  padding: 15px 30px;
  margin: 10px;
  font-size: 1rem;
  transition: 0.2s all;
  font-weight: 500;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: var(--white);
    color: var(--black);
    transform: scale(1.05);
  }

  svg {
    margin-right: 5px;
  }
`;
