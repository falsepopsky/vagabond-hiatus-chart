import styled from 'styled-components';

export const Title = styled.h2`
  padding: 2em 0 1.5em;
  margin: 0;
  color: #f4f7f3;
  font-family: var(--font-family-primary);
  font-size: 24px;

  &::selection {
    text-shadow: none;
    color: white;
    background: blue;
  }

  @media (min-width: 576px) {
    font-size: var(--text-size-primary);
  }
`;

export const TitleContainer = styled.article`
  width: 100%;
  height: auto;
`;

export const NivoContainer = styled.article`
  width: 100%;
  height: 440px;
  margin: 0 0 4em;
  padding: 0;
  overflow: hidden;

  .text-hidden {
    display: none;
  }
`;

export const LineContainer = styled.div`
  border-top: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : 'rgb(63, 121, 183)')};
  flex: 1 1 100%;
  padding: 0;
`;

export const SectionContainer = styled.section`
  margin: 0;
  padding: 1.5vh 5vw 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  background-color: #000000;
  text-align: center;
`;
