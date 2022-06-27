import styled, { css } from 'styled-components';

interface SectionProps {
  logo?: boolean;
}

interface PHeroProps {
  story: string;
}

export const Container = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  color: #0b0b0b;
  background: #f2f2f2;
`;

export const SectionHero = styled.section<SectionProps>`
  display: flex;
  flex-flow: ${({ logo }) => (logo ? 'column nowrap' : 'row nowrap')};
  align-items: center;
`;

export const HeroP = styled.p<PHeroProps>`
  ${({ story }) => {
    switch (story) {
      case 'first':
        return css`
          margin: 10px 0 0;
          font-weight: 600;
          font-size: 1.4rem;
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
