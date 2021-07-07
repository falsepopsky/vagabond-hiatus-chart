import styled from 'styled-components';

export const HeatNav = styled.div`
  margin: 0;
  padding: 0;
  width: auto;
  min-height: 60px;
  max-height: 60px;
  height: 60px;
  align-self: center;
  font-family: ${({ theme }) => theme.familyFont.primary};
`;

export const Navigation = styled.nav`
  padding: 2px 20px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const SmallContainer = styled.div`
  margin: ${(props) => (props.shuffle ? '0 10px 0 18px' : '0')};
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
`;

export const TitleNav = styled.p`
  margin: 0 0 0 8px;
  padding: 0;
  color: black;
  font-size: 20px;
  display: none;

  &::selection {
    text-shadow: none;
    color: white;
    background: black;
  }

  @media (min-width: 774px) {
    display: inline;
  }
`;

export const ButtonSC = styled.button`
  margin: 0 8px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 0.25rem;
  font-size: 16px;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active,
  :focus {
    outline: none;
    border: none;
  }

  @media (min-width: 720px) {
    width: auto;
  }
`;

export const TextButton = styled.span`
  display: none;

  @media (min-width: 774px) {
    margin: 0;
    padding: 0 0 0 6px;
    display: inline-flex;
  }
`;

export const LegendTitle = styled.h3`
  margin: 0;
  padding: 26px 0;
  font-size: ${({ theme }) => theme.sizeFont.m};
  align-self: normal;

  &::before {
    content: '';
    width: 4px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    background-color: #d91a32;
  }
`;

export const LegendsContainer = styled.article`
  margin: 0;
  padding: 0 0 3vw 0;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  font-family: ${({ theme }) => theme.familyFont.primary};

  .legend-card-one {
    margin: 0;
    width: 460px;
    height: 200px;
    display: flex;
    justify-content: center;

    &-img {
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 576px) {
    .legend-card-one {
      display: none;
    }
  }
`;

export const ArticleTwo = styled.article`
  margin: 20px 0;
  display: flex;
  flex-flow: ${({ flow }) => (flow ? flow : 'row wrap')};
  width: 400px;
  height: ${({ two }) => (two ? '200px' : 'auto')};
  justify-content: ${({ two }) => (two ? two : null)};
  align-items: ${({ two }) => (two ? 'flex-start' : null)};

  @media (min-width: 576px) {
    margin: 0;
  }
`;

export const StyledP = styled.p`
  margin: 0;
  color: ${({ color }) => (color ? color : 'inherit')};

  &::before {
    margin: 0 10px;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : null};
  }
`;
