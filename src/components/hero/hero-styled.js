import styled from 'styled-components';
import vagabond from '../../assets/vagabond-min.png';

export const HeroStyles = styled.div`
  .row {
    margin: 0;
    text-align: center;
  }

  .vagabond-background {
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${vagabond}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
  }

  .full-heigth {
    height: 100vh;
  }

  .vagabond-logo {
    margin: 50px 0 0 0;
    width: 70%;
    height: 30%;
  }
  .hero-text-main {
    font-family: 'VarelaRound';
    color: black;
  }
`;
