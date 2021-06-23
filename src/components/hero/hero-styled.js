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
    &-figure {
      margin-top: auto;
      pointer-events: none;
      user-select: none;
    }

    &-arrow {
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      animation: ${animationRule};
    }
  }
`;

export const HeroSectionSub = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: hsl(352, 79%, 48%);

  .hero {
    &-logo {
      margin: 50px 0 0 0;
      width: 50%;
      height: auto;
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

  span {
    font-size: 0.6rem;
    user-select: none;
    letter-spacing: 3px;
  }

  @media (max-width: 576px) {
    .hero {
      &-logo {
        width: 90%;
        height: auto;
      }

      &-description {
        font-size: 19px;
        max-width: 320px;
      }
    }

    span {
      font-size: 0.6rem;
      display: block;
    }
  }
`;

export const TitleHero = styled.h1`
  font-size: ${({ maintitle }) =>
    maintitle ? 'var(--text-size-primary)' : 'var(--text-size-secondary)'};
  margin-top: ${({ maintitle }) => (maintitle ? 'auto' : '1em')};
  padding-bottom: ${({ maintitle }) => (maintitle ? '0' : '24px')};

  ::selection {
    text-shadow: none;
    color: white;
    background: ${({ maintitle }) => (maintitle ? 'black' : 'transparent')};
  }

  @media (min-width: 576px) {
    font-size: var(--text-size-primary);
    padding: 0;
  }
`;
