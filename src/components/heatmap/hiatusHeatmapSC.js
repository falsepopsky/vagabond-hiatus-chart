import styled, { css } from 'styled-components';

export const ButtonSC = styled.button`
  width: 120px;
  height: 42px;
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
    color: #023218;
    background-color: #0bcf65;
    border-color: #023218;
  }

  &:focus: {
    box-shadow: 0 0 0 0.2rem #023218;
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

      &:active {
        background-color: #084fb4;
      }
    `};
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
      margin-top: 5em;
    }
  }

  .heatmap-render {
    padding: 0;
    width: 100%;
    height: 460px;

    &-text {
      color: transparent;
    }
  }

  .heatmap-database-legend {
    padding: 0;
    width: 100%;
    height: auto;
    background-color: #000000;
  }

  .legend-section {
    padding: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .legend-card-one {
    margin: 10px 6px 10px 6px;
    width: 502px;
    height: 194px;
    background-color: #8cfbde;
    border-radius: 10px;
    color: #103900;
    font-family: Lato;
    display: flex;
    justify-content: center;

    &:hover {
      box-shadow: 1px 2px 25px 3px #8b94a3;
    }
  }

  .legend-img {
    width: 80%;
    height: auto;
    pointer-events: none;
  }

  .legend-card-two {
    margin: 10px 6px 10px 0;
    width: 300px;
    height: 150px;
    display: flex;
    flex-flow: column wrap;
    border-radius: 10px;
    justify-content: center;
    justify-content: space-around;
    align-content: space-around;
  }

  .item {
    width: auto;
    height: 20px;
    display: inline-flex;
  }

  .cuadrado {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin-right: 20px;
  }

  .blanco {
    background-color: #f4f7f3;
  }

  .texto-blanco {
    color: #f4f7f3;
  }

  .verde {
    background-color: #70ddc6;
  }

  .texto-verde {
    color: #70ddc6;
  }

  .rojo {
    background-color: #f95d5a;
  }

  .texto-rojo {
    color: #f95d5a;
  }
`;
