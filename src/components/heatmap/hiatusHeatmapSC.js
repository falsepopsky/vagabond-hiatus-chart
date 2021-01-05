import styled from 'styled-components';

export const HeatmapStyles = styled.div`
  .ligma {
    background-color: #700377;
    color: #ff2d2e;
    font-size: 18px;
    border: 3px solid #ff2d2e;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    font-family: 'VarelaRound';
  }
  .arc {
    background-color: #0b54cf;
    color: #07f4fb;
    font-size: 18px;
    border: 3px solid #07f4fb;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    width: 100px;
    font-family: 'VarelaRound';
  }
  .arc:hover {
    background-color: #084fb4;
  }
  .arc:active {
    background-color: #084fb4;
  }

  .heatmap-section {
    padding: 0;
    width: 100%;
    height: 460px;
  }

  .legend-section {
    padding: 0;
    width: 100%;
    height: auto;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .legend-card-one {
    margin: 10px 6px 10px 0;
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
  }

  .legend-card-two {
    margin: 10px 6px 10px 0;
    width: 300px;
    height: 150px;
    background-color: #5393f2;
    border-radius: 10px;
  }
`;
