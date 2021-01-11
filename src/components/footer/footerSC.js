import styled from 'styled-components';

export const FooterMain = styled.footer`
  display: flex;
  flex-flow: row wrap;
  width: auto;
  height: auto;
  background-color: black;
  color: #c4bebe;
  margin: auto 0 0;
  padding: 3vw 5vw;
  font-family: 'HelveticaNowDisplayRegular';

  .footer-line {
    border-top: 1px solid rgb(240, 240, 243, 0.9);
    flex: 1 1 100%;
    padding: 0 0 20px 0;
  }

  .nav-link {
    color: #c4bebe;
    margin-left: 24px;
    padding: 0;
    width: auto;
    max-width: 48px;

    &:hover {
      color: #01f1e3;
    }
  }

  .footer-text-copyrigth {
    color: white;
    text-align: center;
  }

  .section-one {
    order: 1;
    flex-grow: 2;
  }

  .section-two {
    display: flex;
    flex-flow: column wrap;
    order: 2;
    flex-grow: 1;
  }

  .section-three {
    order: 3;
    flex-grow: 1;
  }

  .section-four {
    flex: 1 1 100%;
    order: 4;
    text-align: center;
  }

  .about-text {
    width: 100%;
    max-width: 400px;
    padding: 0 0 0 26px;
  }

  @media (max-width: 750px) {
    .section-two, .section-three {
      padding: 30px 0;
      flex: 1 1 50%;
    }

  @media (max-width: 576px) {
    .section-two, .section-three {
      padding: 30px 0;
      flex: 1 1 100%;
    }
`;

export const FooterSection = styled.section`
  width: auto;
  height: auto;
  align-self: stretch;
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  color: white;

  &::before {
    content: '';
    width: 4px;
    height: 34px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    background-color: #d91a32;
  }
`;

export const ExtraLinks = styled.ul`
  list-style-type: none;
  padding: 0;

  & > li > a {
    color: #c4bebe;
    text-decoration: none;
    padding-left: 24px;

    &:hover {
      color: #01f1e3;
    }
  }
`;
