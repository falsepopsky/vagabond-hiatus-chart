import styled from 'styled-components';

export const StatsContent = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  font-family: ${({ theme }) => theme.familyFont.primary};
  text-align: center;
  letter-spacing: 0.14em;
  color: white;
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

  @media (max-width: 576px) {
    width: 300px;
    margin: 40px 0 0 0;

    .title-stats {
      font-size: x-large;
    }

    .table-box-content {
      margin: 40px 0 0 0;
    }
  }
`;

export const TextTable = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.primary ? '20px' : '14px')};
  line-height: ${(props) => (props.primary ? '21px' : '30px')};

  ::selection {
    text-shadow: none;
    color: black;
    background: white;
  }

  @media (min-width: 576px) {
    font-size: ${(props) => (props.primary ? '36px' : '24px')};
    line-height: ${(props) => (props.primary ? '54px' : '36px')};
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
