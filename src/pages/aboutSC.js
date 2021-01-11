import styled from 'styled-components';

export const AboutMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
  margin: 0;
  padding: 2vw 5vw 3vw;
  font-family: 'HelveticaNowDisplayRegular';

  .about-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin: auto;
    display: block;
    border-radius: 20px;
  }

  .about-text {
    margin: 0 3rem;
    max-width: 700px;
    font-size: 26px;
    padding: 0 0 20px;
  }

  .about-shotout {
    color: #ff7b7b;
  }

  .email-pop:after {
    content: ' falsepopsky@protonmail.com ';
    color: #ffd779;
  }

  .email-subject:after {
    content: 'business dev';
    color: #ffd779;
  }

  .about-links {
    color: #01f1e3;
    text-decoration: none;
    padding: 0 2px 0 4px;

    &:hover {
      color: #d00;
    }
  }
`;

export const AboutSection = styled.section`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleAbout = styled.h3`
  text-align: center;
  padding: 0 0 30px;

  &:before {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    margin: -8px -12px;
    border-color: #c56464;
    border-style: solid;
    border-width: 2px 0 0 2px;
  }

  &:after {
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
