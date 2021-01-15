import styled from 'styled-components';

export const CPYContainer = styled.section`
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

export const CPYLineContainer = styled.div`
  border-top: 1px solid rgb(249, 160, 63);
  flex: 1 1 100%;
  margin: 0 5vw;
`;

export const TitleContainer = styled.article`
  width: 100%;
  height: auto;
  padding: 0 5vw;
  order: 1;

  .line-main-title {
    margin-top: 2em;
    color: white;
    font-size: var(--text-size-primary);

    &::selection {
      text-shadow: none;
      color: white;
      background: blue;
    }
  }

  @media (max-width: 576px) {
    .line-main-title {
      font-size: x-large;
    }
  }
`;

export const NivoLineContainer = styled.article`
  width: 100%;
  height: 440px;
  padding: 0 5vw;
  order: 2;

  .line-hidden-render {
    display: none;
  }
`;
