import styled from 'styled-components';

export const AboutMain = styled.main`
  margin: 0;
  padding: 2vw 5vw 3vw;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
  font-family: 'HelveticaNowDisplayRegular';

  .about-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 6px;
  }

  .about-text {
    margin: 0;
    padding: 0 3rem 20px;
    max-width: 700px;
    font-size: 26px;
  }

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

export const StyledLink = styled.a`
  color: #01f1e3;
  text-decoration: none;

  :hover {
    color: #d00;
    text-decoration: none;
  }
`;

export const AboutSection = styled.section`
  padding: 20px 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleAbout = styled.h3`
  font-size: 28px;
  text-align: center;
  padding: 0 0 30px;

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
    margin: 20px -6px;
    border-color: #c56464;
    border-style: solid;
    border-width: 0 2px 2px 0;
  }
`;
