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
  padding: ${({ pad }) => (pad ? pad : '1.5vh 5vw 0')};
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 2em 0 1.5em;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.familyFont.primary};
  font-size: 24px;

  &::selection {
    text-shadow: none;
    color: ${({ theme }) => theme.colors.primary};
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

  &::selection {
    text-shadow: none;
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const TitleContainer = styled.article`
  width: 100%;
  height: auto;
`;

export const NivoContainer = styled.article`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 440px;
  position: absolute;
`;

export const LineContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 2px;
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

  &::selection {
    text-shadow: none;
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLink = styled.a`
  margin: ${({ footerMar }) => (footerMar ? '6px 0 0 24px' : '0')};
  text-decoration: none;
  color: ${({ footerLink }) => (footerLink ? '#c4bebe' : '#01f1e3')};
  max-width: max-content;

  &::selection {
    text-shadow: none;
    color: black;
    background: #01f1e3;
  }

  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }
`;
