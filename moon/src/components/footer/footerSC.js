import styled from 'styled-components';

export const FooterMain = styled.footer`
  margin: auto 0 0;
  padding: 3vw 5vw 0;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};

  .nav-link {
    margin: 6px 0 0 24px;
    padding: 0;
    max-width: max-content;
    color: #c4bebe;
    text-decoration: none;

    &:hover {
      color: #01f1e3;
    }

    &::selection {
      text-shadow: none;
      color: black;
      background: #01f1e3;
    }
  }

  .section-one {
    order: 1;
    flex-grow: 2;
  }

  .section-two {
    display: flex;
    flex-flow: column nowrap;
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

  @media (max-width: 750px) {
    .section-two,
    .section-three {
      padding: 30px 0;
      flex: 1 1 50%;
    }
  }

  @media (max-width: 576px) {
    .section-two,
    .section-three {
      padding: 30px 0;
      flex: 1 1 100%;
    }
  }
`;

export const FooterLine = styled.div`
  padding: 0 0 20px 0;
  border-top: 1px solid rgb(240, 240, 243, 0.9);
  flex: 1 1 100%;
`;

export const FooterSection = styled.section`
  padding: 0;
  width: auto;
  height: auto;
  align-self: stretch;
  display: flex;
  flex-flow: column nowrap;
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  color: white;

  &::selection {
    text-shadow: none;
    color: black;
    background: white;
  }

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

export const TextFooter = styled.p`
  margin: 0 0 16px;
  padding: ${(props) => (props.copyright ? '0' : '0 0 0 26px')};
  width: 100%;
  max-width: ${(props) => (props.copyright ? '100%' : '400px;')};
  text-align: ${(props) => (props.copyright ? 'center' : 'left')};
  color: ${(props) => (props.copyright ? 'white' : 'inherit')};

  &::selection {
    text-shadow: none;
    color: black;
    background: white;
  }
`;
