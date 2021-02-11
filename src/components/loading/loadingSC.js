import styled from 'styled-components';

export const LoadingContainer = styled.section`
  font-family: var(--font-family-primary);
  color: white;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 500px;
  display: flex;
  flex-flow: column wrap;
  background-color: #000000;
  text-align: center;
  justify-content: center;
  align-items: center;

  .loading-title {
    margin: 2em 0;
    font-size: var(--text-size-primary);

    &::selection {
      text-shadow: none;
      color: white;
      background: blue;
    }
  }

  @media (max-width: 576px) {
    .loading-title {
      font-size: x-large;
    }
  }
`;
