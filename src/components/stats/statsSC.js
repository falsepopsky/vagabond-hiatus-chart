import styled from 'styled-components';

export const StatsContent = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  font-family: var(--font-family-primary);
  color: white;
  letter-spacing: 0.14em;
  text-align: center;
  background-color: black;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 5vw;
`;

export const TableBox = styled.article`
  width: 500px;
  background-color: blue;
  margin: 40px 0;
  order: 1;

  .title-stats {
    font-size: 80px;
  }
`;

export const MusashiBox = styled.article`
  width: 400px;
  margin: 40px 0;
  order: 2;

  .musashi-picture {
    width: 360px;
    height: auto;
  }
`;
