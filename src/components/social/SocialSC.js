import styled from 'styled-components';

export const SocialContainer = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  background-color: #000000;
  text-align: center;
  justify-content: space-evenly;
  color: white;
  font-family: 'HelveticaNowDisplayRegular';

  .social-title {
    margin: 2em;
    font-size: var(--text-size-primary);

    &::selection {
      text-shadow: none;
      color: white;
      background: blue;
    }
  }

  @media (max-width: 576px) {
    .social-title {
      font-size: x-large;
    }
  }
`;

export const SocialLine = styled.div`
  order: 1;
  border-top: 1px solid rgb(77, 213, 167, 0.9);
  flex: 1 1 100%;
  margin: 2vw 5vw;
  padding: 0 0 20px 0;
`;

export const SocialTitleBox = styled.div`
  order: 2;
  flex: 1 1 100%;
  margin: 0;
  padding: 0 5vw;
`;

export const TwitterBox = styled.article`
  order: 3;
  height: 480px;
`;

export const DisqusBox = styled.article`
  order: 4;
  width: 420px;
  height: 480px;
  padding: 0 6px;
  overflow: hidden scroll;
  transition: '1.5s ease-in-out all';
  scrollbar-width: thin;
`;
