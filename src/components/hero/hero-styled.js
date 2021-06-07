import styled, { css, keyframes } from 'styled-components';
import vagabond from '../../assets/vagabond-min.webp';

const bounce = keyframes`
0% {
  top: 0;
}
50% {
  top: -10px;
}
100% {
  top: 0;
}`;

const animationRule = css`
  ${bounce} 1s infinite;
`;

export const HeroStyles = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  font-family: var(--font-family-hero);
  color: white;
  letter-spacing: 0.14em;
  text-align: center;
`;

export const HeroSectionHeader = styled.article`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${vagabond}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .hero {
    &-title {
      font-size: var(--text-size-primary);
      margin-top: auto;

      &::selection {
        text-shadow: none;
        color: white;
        background: black;
      }
    }

    &-figure {
      margin-top: auto;
    }

    &-scroll-down {
      pointer-events: none;
      user-select: none;
    }

    &-arrow {
      width: 30px;
      height: 30px;
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      animation: ${animationRule};
      pointer-events: none;
      user-select: none;
    }
  }

  @media (max-width: 576px) {
    .hero-title {
      opacity: 0.7;
    }
  }
`;

export const HeroSectionSub = styled.article`
  background-color: #d91a32;
  color: black;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  .hero {
    &-logo {
      margin: 50px 0 0 0;
      width: 50%;
      height: auto;
      pointer-events: none;
      user-select: none;
    }

    &-author {
      margin-top: 1em;
      padding-bottom: 24px;
      font-size: var(--text-size-primary);

      &::selection {
        text-shadow: none;
        color: white;
      }

      span {
        font-size: 0.6rem;
        user-select: none;
        letter-spacing: 3px;
      }
    }

    &-description {
      font-family: var(--font-family-primary);
      font-size: var(--text-size-secondary);
      letter-spacing: 3px;
      max-width: 560px;
      padding-bottom: 24px;

      &::selection {
        text-shadow: none;
        color: white;
      }
    }
  }

  @media (max-width: 576px) {
    .hero {
      &-logo {
        width: 90%;
        height: auto;
      }

      &-author {
        margin-top: 1em;
        font-size: 2.7rem;

        span {
          font-size: 0.6rem;
          display: block;
        }
      }

      &-description {
        font-size: var(--text-size-third);
        max-width: 320px;
      }
    }
  }
`;
