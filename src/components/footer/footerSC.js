import styled from 'styled-components';

export const FooterStyles = styled.div`
  margin-top: auto;

  .row {
    background-color: #000000;
    font-family: 'VarelaRound';
  }

  .content-footer {
    margin: 0 5vw 1vw 5vw;
    border-top: 1px solid rgb(240, 240, 243, 0.55);
  }

  .footer-text-content {
    color: white;
  }

  .nav-link {
    color: white;
    display: inline;

    &:hover {
      color: #01f1e3;
    }
  }
`;
