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
    height: 48px;
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
  display: flex;
  flex-flow: column nowrap;
  background-color: #000000;
  font-family: 'VarelaRound';
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
    font-size: var(--text-size-secondary);
    font-family: HelveticaNowDisplayRegular;

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
    align-items: center;

    &-one {
      margin: 10px 0 10px 0;
      width: 460px;
      height: 200px;
      display: flex;
      justify-content: center;

      &-img {
        width: 80%;
        height: auto;
        pointer-events: none;
        user-select: none;
      }
    }

    &-two {
      display: flex;
      flex-flow: column wrap;
      width: 400px;
      height: auto;
      align-items: baseline;
      justify-content: space-around;
      align-content: space-around;

      &-item {
        width: auto;
      }
    }
  }

  .legend-weekly {
    color: #f4f7f3;

    &:before {
      background-color: #f4f7f3;
    }
  }

  .legend-chapter {
    color: #70ddc6;

    &:before {
      background-color: #70ddc6;
    }
  }

  .legend-dont {
    color: #f95d5a;

    &:before {
      background-color: #f95d5a;
    }
  }

  .legend-arc {
    display: flex;
    flex-flow: row wrap;
    width: 400px;
    height: auto;
    align-items: center;

    &-box {
      color: white;
      width: 200px;
      height: 32px;
      text-align: justify;
    }
  }

  .legend-before::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
  }

  .legend-one::before {
    background-color: #bce784;
  }

  .legend-two::before {
    background-color: #fff875;
  }

  .legend-three::before {
    background-color: #28666e;
  }

  .legend-four::before {
    background-color: #06ba63;
  }

  .legend-five::before {
    background-color: #508991;
  }

  .legend-six::before {
    background-color: #7d80da;
  }

  .legend-seven::before {
    background-color: #ffe156;
  }

  .legend-eight::before {
    background-color: #a42cd6;
  }

  .legend-nine::before {
    background-color: #3777ff;
  }

  .legend-ten::before {
    background-color: #4059ad;
  }

  .legend-eleven::before {
    background-color: #ff6663;
  }

  .legend-twelve::before {
    background-color: #e3bfc9;
  }

  .legend-thirteen::before {
    background-color: #f4f7f3;
  }

  @media (max-width: 576px) {
    .legend-card-one {
      display: none;
    }

    .legend-card-two {
      font-size: small;
    }

    .legend-arc {
      margin: 20px 0;
      justify-content: center;
    }

    .legend-arc-box {
      width: 180px;
      font-size: small;
    }
  }
`;
