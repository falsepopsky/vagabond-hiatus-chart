import styled, { css } from 'styled-components';

export const HeaderHero = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
`;

export const SectionHero = styled.section`
  margin: ${({ logo }) => (logo ? '6vh 0 0' : '0')};
  display: flex;
  flex-flow: ${({ logo }) => (logo ? 'column nowrap' : 'row nowrap')};
  align-items: center;
`;

export const MiniBox = styled.div`
  margin: ${({ blob }) => (blob ? '0 3vw 6vh auto' : '0 0 0 3vw')};
  width: ${({ blob }) => (blob ? '560px' : null)};
  height: ${({ blob }) => (blob ? '580px' : null)};
  position: relative;
  overflow: hidden;

  .box {
    position: absolute;
  }

  .redbox {
    top: -20px;
    right: 116px;
  }

  .whitebox {
    top: 131px;
    left: -46px;
    transform: rotate(208deg);
  }

  .greenbox {
    right: -62px;
    bottom: 28px;
  }

  @media (max-width: 972px) {
    display: ${({ blob }) => (blob ? 'none' : null)};
  }
`;

export const StyledH1 = styled.h1`
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 86px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;

  @media (max-width: 576px) {
    margin: 6vh 0;
    font-size: ${({ theme }) => theme.sizeFont.l};
    line-height: 56px;
  }
`;

export const HeroP = styled.p`
  ${({ story }) => {
    switch (story) {
      case 'first':
        return css`
          margin: 10px 0 0;
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;
        `;
      case 'second':
        return css`
          margin-top: 8vh;
          width: 350px;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 31px;

          @media (max-width: 576px) {
            margin: 8vh 0;
            font-size: ${({ theme }) => theme.sizeFont.m};
          }
        `;
      default:
        return css`
          margin: 0;
        `;
    }
  }}
`;

export const SpanHero = styled.span`
  font-size: 12px;
`;
