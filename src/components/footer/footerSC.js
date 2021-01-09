import styled from 'styled-components';

export const FooterStyles = styled.footer`
  margin-top: auto;
  font-family: 'HelveticaNowDisplayRegular';
  color: #c4bebe;
  background-color: #000000;

  .content-footer {
    margin: 0 5vw 1vw 5vw;
    border-top: 1px solid rgb(240, 240, 243, 0.55);

    &-row {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      padding-top: 24px;
    }
  }

  .footer-text-content {
    text-align: center;
    color: white;
  }

  .nav-link {
    color: #c4bebe;
    display: block;
    margin-left: 24px;
    padding: 0;

    &:hover {
      color: #01f1e3;
    }
  }

  .extra-links {
    color: #c4bebe;
    text-decoration: none;
    padding-left: 24px;

    &:hover {
      color: #01f1e3;
    }
  }
`;

export const ExtraLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TitleFooter = styled.h3`
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

export const BoxFooter = styled.div`
  height: 200px;
  width: auto;
  max-width: 300px;

  & > p {
    padding-left: 24px;
  }
`;
