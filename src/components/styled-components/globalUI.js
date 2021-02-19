import styled from 'styled-components';

export const Title = styled.h2`
  padding: 0 0 40px;
  margin: 3em 0 0;
  color: #f4f7f3;
  font-family: var(--font-family-primary);
  font-size: var(--text-size-primary);

  &::selection {
    text-shadow: none;
    color: white;
    background: blue;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const TitleContainer = styled.article`
  width: 100%;
  height: auto;
  padding: 0 5vw;
`;

export const NivoContainer = styled.article`
  width: 100%;
  height: 440px;
  padding: 0 5vw;
  overflow: hidden;

  .text-hidden {
    display: none;
  }
`;

export const LineContainer = styled.div`
  border-top: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : 'rgb(63, 121, 183)')};
  flex: 1 1 100%;
  margin: 100px 5vw 0;
`;
