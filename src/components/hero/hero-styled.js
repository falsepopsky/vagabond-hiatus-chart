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

  .hero-section {
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
      url(${vagabond}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;

    &-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    &-main {
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

    &-arrow {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 0;
      bottom: 40px;
      left: calc(100% - 50%);
      right: 0;
      margin-top: auto;
      animation: ${animationRule};
      pointer-events: none;
    }

    &-logo {
      margin: 50px 0 0 0;
      width: 70%;
      height: 30%;
      pointer-events: none;
    }

    &-author {
      font-family: 'Teko';
      color: black;
      font-size: 2rem;
      letter-spacing: 0.14em;
      margin-top: 1em;

      &::selection {
        text-shadow: none;
        color: white;
        background: #2ecc71;
      }

      span {
        color: black;
        font-size: 0.6rem;
        user-select: none;
      }
    }
  }

  @media (max-width: 576px) {
    .hero-section-logo {
      width: 100%;
      height: auto;
    }

    .hero-section-author {
      margin-top: 1em;
      font-size: 2.7rem;

      span {
        font-size: 0.6rem;
      }
    }
  }
`;
