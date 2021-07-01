import styled from 'styled-components';

export const ButtonSC = styled.button`
  margin: 0 8px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 0.25rem;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  &:active,
  :focus {
    outline: none;
    border: none;
  }

  @media (min-width: 720px) {
    width: auto;
  }
`;

export const HeatmapBar = styled.div`
  width: auto;
  height: 60px;
  align-self: center;

  .navigation-heatmap {
    padding: 0 20px;
    height: 55px;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    align-content: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #f9f9f9;
  }

  .database {
    &-section {
      display: flex;
      flex-flow: row nowrap;
      order: 1;
      align-content: center;
      align-items: center;
    }

    &-title {
      color: black;
      margin: 0 0 0 8px;
      font-size: 20px;
      display: inline;

      &::selection {
        text-shadow: none;
        color: white;
        background: black;
      }
    }
  }

  .shuffle-section {
    order: 2;
    display: flex;
    align-items: center;
    margin: 0 10px 0 18px;
  }

  .buttons-section {
    order: 3;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: auto;
  }

  @media (max-width: 774px) {
    .database-title {
      display: none;
    }
  }
`;

export const TextButton = styled.span`
  display: none;

  @media (min-width: 774px) {
    display: contents;
    margin: 0;
    padding: 0 0 0 6px;
  }
`;

export const HeatmapContainer = styled.section`
  margin: 0;
  padding: 1.5vh 5vw 0;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  background-color: #000000;
  font-family: ${({ theme }) => theme.familyFont.secondary};
  text-align: center;

  .heatmap-database-legend {
    padding: 0;
    width: 100%;
    height: auto;
  }

  .heatmap-title {
    display: flex;
    flex-flow: column wrap;
    width: auto;
    height: auto;
    align-items: baseline;
    margin: 0;
    padding: 0;
    color: white;
  }

  .title-database-legend {
    font-size: ${({ theme }) => theme.sizeFont.m};
    font-family: ${({ theme }) => theme.familyFont.primary};

    &::before {
      content: '';
      width: 4px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px;
      background-color: #d91a32;
    }
  }

  .legend-card {
    padding: 0 0 3vw 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;

    &-one {
      margin: 10px 0;
      width: 460px;
      height: 200px;
      display: flex;
      justify-content: center;

      &-img {
        width: 80%;
        height: auto;
      }
    }
  }

  @media (max-width: 576px) {
    .legend-card-one {
      display: none;
    }
  }
`;

export const ArticleTwo = styled.article`
  margin: 20px 0;
  display: flex;
  flex-flow: ${({ flow }) => (flow ? flow : 'row wrap')};
  width: 400px;
  height: ${({ two }) => (two ? '200px' : 'auto')};
  justify-content: ${({ two }) => (two ? two : null)};
  align-items: ${({ two }) => (two ? 'flex-start' : null)};

  @media (min-width: 576px) {
    height: auto;
    margin: 0;
  }
`;

export const StyledP = styled.p`
  margin: 0;
  color: ${({ color }) => (color ? color : 'inherit')};

  ::before {
    margin: 0 10px;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : null};
  }
`;
