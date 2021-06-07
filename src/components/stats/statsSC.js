import styled from 'styled-components';

export const StatsContent = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  font-family: var(--font-family-primary);
  color: white;
  letter-spacing: 0.14em;
  text-align: center;
  background-color: black;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 0 5vw 5vh;
`;

export const TableBox = styled.article`
  width: 500px;
  margin: 80px 0 0 0;
  order: 1;

  .title-stats {
    font-size: 80px;

    &::selection {
      text-shadow: none;
      color: white;
      background: blue;
    }
  }

  .table-box-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    border-bottom: 1px solid white;
  }

  .table-box-content {
    margin: 90px 0 0 0;
  }

  .table-main-title {
    margin: 0;
    padding: 0;
    font-size: 24px;

    &::selection {
      text-shadow: none;
      color: black;
      background: white;
    }
  }

  .table-main-data {
    margin: 0;
    padding: 0;
    font-size: 36px;

    &::selection {
      text-shadow: none;
      color: black;
      background: white;
    }
  }

  @media (max-width: 576px) {
    width: 300px;
    margin: 40px 0 0 0;

    .title-stats {
      font-size: x-large;
    }

    .table-box-content {
      margin: 40px 0 0 0;
    }

    .table-main-title {
      font-size: 14px;
    }

    .table-main-data {
      font-size: 20px;
    }
  }
`;

export const MusashiBox = styled.article`
  width: 400px;
  margin: 80px 0 0 0;
  order: 2;

  .musashi-picture {
    width: 360px;
    height: auto;
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
