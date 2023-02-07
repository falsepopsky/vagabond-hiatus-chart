import styled from 'styled-components';

interface WrapperProps {
  isAbout?: boolean;
}

interface ColProps {
  isHomeSection?: boolean;
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

const Wrapper = styled.div<WrapperProps>`
  padding: ${({ isAbout }) => (isAbout ? '0 3vw 4vh' : '0 3vw')};
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4em 0;
`;

const ColumnContainer = styled.div<ColProps>`
  display: flex;
  flex-flow: column nowrap;
  gap: ${({ isHomeSection }) => (isHomeSection ? '4em 0' : '2em')};
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  gap: 1em;
`;

const IconContainer = styled.div`
  display: flex;
  background: #f0f0f0;
  border-radius: 6px;
  padding: 4px;
`;

export const HeaderTwo = styled.h2`
  max-width: max-content;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: left;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const TitleAbout = styled.h3`
  margin: 2em 0 1em;
  color: #00c2d7;
  background: #07303b;
  letter-spacing: 0.126em;
  font-size: 1.4rem;
  font-weight: 500;
  max-width: max-content;
`;

const StyledText = styled.p`
  font-weight: 300;
`;

export { TitleAbout, StyledText, Main, Wrapper, ColumnContainer, IconContainer, RowContainer };
