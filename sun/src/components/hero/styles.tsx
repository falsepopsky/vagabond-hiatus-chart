import styled, { css } from 'styled-components';

interface PHeroProps {
  story?: string;
}

interface SVGBoxProps {
  top: string;
  left: string;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  color: #0b0b0b;
  background: #f2f2f2;
  align-items: center;

  .logo {
    margin: 4em 0;
    padding: 0 1em;
    width: 100%;
    max-width: 500px;
    min-width: 300px;
  }
`;

export const SectionHero = styled.div`
  padding: 0 3vw;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;

export const HeroP = styled.p<PHeroProps>`
  ${({ story }) => {
    switch (story) {
      case 'first':
        return css`
          font-size: 1.4rem;
          font-weight: 400;
        `;
      case 'second':
        return css`
          margin-top: 1.6em;
          max-width: 350px;
          font-size: 1.5rem;
          font-weight: 400;
        `;
      default:
        return css`
          margin: 0;
        `;
    }
  }}
`;

export const SpanHero = styled.span`
  font-size: 1rem;
`;

export const HeaderOne = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-align: left;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
`;

export const SVGContainer = styled.div`
  display: none;

  @media (min-width: 930px) {
    position: relative;
    width: 500px;
    height: 580px;
    overflow: hidden;
    display: initial;
  }
`;

export const SVGBox = styled.div<SVGBoxProps>`
  position: absolute;
  top: ${(props) => props.top && props.top};
  left: ${(props) => props.left && props.left};
`;
