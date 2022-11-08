import styled from 'styled-components';

interface LiProps {
  color?: string;
}

export const BorderBox = styled.div`
  padding: 0.5em 1em;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px solid #fff;
  max-width: max-content;
  gap: 0 0.6em;
`;

export const Button = styled.button`
  padding: 0.2em 0.4em;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #1c1c1c;
  background: #ececec;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active,
  :focus {
    outline: none;
    border: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const OlStyled = styled.ol`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2em;
  list-style-type: none;
`;

export const ListStyled = styled.li<LiProps>`
  font-size: 0.9rem;
  font-weight: 400;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    left: -18px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.color && props.color};
  }
`;
