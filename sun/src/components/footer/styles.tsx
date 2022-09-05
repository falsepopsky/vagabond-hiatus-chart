import styled from 'styled-components';

interface BoxProps {
  general?: boolean;
}

interface TextProps {
  copyright?: boolean;
}

const Containerf = styled.footer`
  margin: auto 0 0;
  padding: 3vh 3vw 2vh;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;

  @media (max-width: 750px) {
    flex-flow: column nowrap;
  }
`;

const FooterLine = styled.div`
  padding: 0 0 20px 0;
  border-top: 1px solid rgb(240, 240, 243, 0.9);
  flex: 1 1 100%;
`;

const Boxf = styled.div<BoxProps>`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: ${({ general }) => (general ? '2' : '1')};
`;

const Titlef = styled.h4`
  margin: 1em 0;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;

  &::selection {
    text-shadow: none;
    color: #000000;
    background: #ffffff;
  }
`;

const Textf = styled.p<TextProps>`
  margin: ${({ copyright }) => (copyright ? '0' : '0 0 0.6em')};
  padding: 0;
  width: 100%;
  max-width: 100%;
  font-weight: 300;
  font-size: 0.9rem;
  text-align: ${({ copyright }) => copyright && 'center'};
`;

export { Containerf, FooterLine, Boxf, Titlef, Textf };
