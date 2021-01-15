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
`;

export const TwitterBox = styled.article`
  order: 1;
  height: 480px;
`;

export const DisqusBox = styled.article`
  order: 2;
  width: 400px;
  height: 480px;
  overflow: hidden scroll;
  transition: '1.5s ease-in-out all';
  scrollbar-width: thin;
`;
