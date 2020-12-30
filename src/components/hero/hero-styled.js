import styled, { css, keyframes } from 'styled-components';
import vagabond from '../../assets/vagabond-min.png';

const bounce = keyframes`
0% {
  bottom: 40px;
}
50% {
  bottom: 50px;
}
100% {
  bottom: 40px;
}`;

const animationRule = css`
  ${bounce} 1s infinite;
`;

export const HeroStyles = styled.div`
  .row {
    margin: 0;
    text-align: center;
  }

  .vagabond-background {
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
      url(${vagabond}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
  }

  .full-heigth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .arrow-down-freepik {
    width: 100%;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 40px;
    left: 0;
    right: 0;
    margin-top: auto;
    animation: ${animationRule};
  }

  .vagabond-logo {
    margin: 50px 0 0 0;
    width: 70%;
    height: 30%;
  }

  .hero-text-main {
    font-family: 'Teko';
    color: white;
    font-size: 3.1rem;
    letter-spacing: 0.14em;
    margin-top: 20px;

    &::selection {
      text-shadow: none;
      color: white;
      background: black;
    }
  }

  .hero-text-sub {
    font-family: 'Teko';
    color: black;
    font-size: 2rem;
    letter-spacing: 0.14em;
    margin-top: 20px;

    &::selection {
      text-shadow: none;
      color: white;
      background: #2ecc71;
    }

    span {
      color: black;
      font-size: 0.6rem;
    }
  }
`;
