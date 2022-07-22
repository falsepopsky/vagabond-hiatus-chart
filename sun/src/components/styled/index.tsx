import styled from 'styled-components';

const Main = styled.main`
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

const Wrapper = styled.div`
  padding: 0 3vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
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
  font-weight: 700;
  text-align: left;
  margin: 0;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const TitleAbout = styled.h3`
  margin: 2em 0;
  font-size: 1.7rem;
  letter-spacing: 0.126em;
  position: relative;
  align-self: center;

  &::before,
  ::after {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    border-color: #3f47cc;
    border-style: solid;
  }

  &::before {
    left: -20px;
    top: -13px;
    border-width: 2px 0 0 2px;
  }

  &::after {
    right: -14px;
    bottom: -10px;
    border-width: 0 2px 2px 0;
  }

  &::selection {
    text-shadow: none;
    color: #d6d6d6;
    background: blue;
  }
`;

const StyledText = styled.p`
  margin: 0;
  padding: 0 0 20px;
  max-width: 680px;
  font-size: 26px;
`;

export { TitleAbout, StyledText, Main, Wrapper, ColumnContainer, IconContainer, RowContainer };
