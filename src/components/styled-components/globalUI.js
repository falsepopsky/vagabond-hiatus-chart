import styled from 'styled-components';

export const StyledMain = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

export const SectionContainer = styled.section`
  margin: 0;
  padding: 1.5vh 5vw 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  background-color: #000000;
  text-align: center;
`;

export const Title = styled.h2`
  padding: 2em 0 1.5em;
  margin: 0;
  color: #f4f7f3;
  font-family: ${({ theme }) => theme.familyFont.primary};
  font-size: 24px;

  &::selection {
    text-shadow: none;
    color: white;
    background: blue;
  }

  @media (min-width: 576px) {
    font-size: ${({ theme }) => theme.sizeFont.l};
  }
`;

export const TitleAbout = styled.h3`
  padding: 0 0 30px;
  font-size: 28px;
  letter-spacing: 0.126em;
  text-align: center;

  &::before {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    margin: -8px -12px;
    border-color: #c56464;
    border-style: solid;
    border-width: 2px 0 0 2px;
  }

  &::after {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    margin: 18px -6px;
    border-color: #c56464;
    border-style: solid;
    border-width: 0 2px 2px 0;
  }
`;

export const TitleContainer = styled.article`
  width: 100%;
  height: auto;
`;

export const NivoContainer = styled.article`
  width: 100%;
  height: 440px;
  margin: 0 0 4em;
  padding: 0;
  overflow: hidden;

  .text-hidden {
    display: none;
  }
`;

export const LineContainer = styled.div`
  padding: 0;
  border-top: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'rgb(63, 121, 183)')};
  flex: 1 1 100%;
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 0 0 20px;
  max-width: 680px;
  font-size: ${({ theme }) => theme.sizeFont.m};

  .about-shotout {
    color: #ff7b7b;
  }

  .email-pop {
    direction: rtl;
    unicode-bidi: bidi-override;
    color: #ffd779;
  }

  .email-subject {
    direction: rtl;
    unicode-bidi: bidi-override;
    color: #ffd779;
  }
`;
