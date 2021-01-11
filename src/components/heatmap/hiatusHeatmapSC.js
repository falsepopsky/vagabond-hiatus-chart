import styled, { css } from 'styled-components';

export const ButtonSC = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  font-size: 16px;
  background-color: #0bcf65;
  color: #023218;
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #11b55c;
  }

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.arc &&
    css`
      background-color: #0b54cf;
      color: #001333;
      padding: 0.3rem 1rem;

      &:hover {
        background-color: #084fb4;
      }
    `}
`;

export const HeatmapBox = styled.section`
  padding: 0 5vw;
  width: 100%;
  height: 460px;

  .heatmap-render-text {
    color: transparent;
  }
`;

export const HeatmapStyles = styled.div`
  .heatmap-section {
    background-color: #000000;
    margin: 0;
    font-family: 'VarelaRound';
  }

  .heatmap-main {
    padding: 0;

    &-title {
      margin-top: 3.5em;
      color: #f4f7f3;
      font-family: 'HelveticaNowDisplayRegular';
    }
  }

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
    background-color: black;
    align-items: baseline;
    margin: 0;
    padding: 2vw 5vw;

    &-box {
      color: white;
      width: auto;
    }
  }

  .title-database-legend {
    font-size: 24px;
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

  .heatmap-buttons {
    display: flex;
    justify-content: space-evenly;
    padding: 2vw 0 1vw;
  }

  .legend-card {
    padding: 1vw 5vw 3vw;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
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
    .heatmap-main-title {
      font-size: x-large;
    }

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
