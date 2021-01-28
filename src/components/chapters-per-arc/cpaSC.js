import styled from 'styled-components';

export const CPAContainer = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column wrap;
  font-family: var(--font-family-primary);
  background-color: #000000;
  text-align: center;
`;

export const TitleContainer = styled.article`
  width: 100%;
  height: auto;
  padding: 0 5vw;
  order: 1;

  .cpa-main-title {
    margin: 2em 0;
    color: white;
    font-size: var(--text-size-primary);

    &::selection {
      text-shadow: none;
      color: white;
      background: blue;
    }
  }

  @media (max-width: 576px) {
    .cpa-main-title {
      font-size: x-large;
    }
  }
`;

export const NivoTreeMapContainer = styled.article`
  width: 100%;
  height: 440px;
  padding: 0 5vw;
  order: 2;

  .secret-line {
    display: none;
  }
`;

export const CPALineContainer = styled.div`
  border-top: 1px solid rgb(63, 121, 183);
  flex: 1 1 100%;
  margin: 100px 5vw 0;
`;
