import styled, { keyframes } from 'styled-components';

const glitchOne = keyframes`
  0% {
    clip-path: inset(132px 0 101px);
  }
  5% {
    clip-path: inset(17px 0 94px);
  }
  10% {
    clip-path: inset(40px 0 66px);
  }
  15% {
    clip-path: inset(87px 0 82px);
  }
  20% {
    clip-path: inset(137px 0 61px);
  }
  25% {
    clip-path: inset(34px 0 14px);
  }
  30% {
    clip-path: inset(133px 0 74px);
  }
  35% {
    clip-path: inset(76px 0 107px);
  }
  40% {
    clip-path: inset(59px 0 130px);
  }
  45% {
    clip-path: inset(29px 0 84px);
  }
  50% {
    clip-path: inset(22px 0 67px);
  }
  55% {
    clip-path: inset(67px 0 62px);
  }
  60% {
    clip-path: inset(10px 0 105px);
  }
  65% {
    clip-path: inset(78px 0 115px);
  }
  70% {
    clip-path: inset(105px 0 13px);
  }
  75% {
    clip-path: inset(15px 0 75px);
  }
  80% {
    clip-path: inset(66px 0 39px);
  }
  85% {
    clip-path: inset(133px 0 73px);
  }
  90% {
    clip-path: inset(36px 0 128px);
  }
  95% {
    clip-path: inset(68px 0 103px);
  }
  100% {
    clip-path: inset(14px 0 100px);
  }
`;

const glitchTwo = keyframes`
  0% {
    clip-path: inset(129px 0 36px);
  }
  5% {
    clip-path: inset(36px 0 4px);
  }
  10% {
    clip-path: inset(85px 0 66px);
  }
  15% {
    clip-path: inset(91px 0 91px);
  }
  20% {
    clip-path: inset(148px 0 138px);
  }
  25% {
    clip-path: inset(38px 0 122px);
  }
  30% {
    clip-path: inset(69px 0 54px);
  }
  35% {
    clip-path: inset(98px 0 71px);
  }
  40% {
    clip-path: inset(146px 0 34px);
  }
  45% {
    clip-path: inset(134px 0 43px);
  }
  50% {
    clip-path: inset(102px 0 80px);
  }
  55% {
    clip-path: inset(119px 0 44px);
  }
  60% {
    clip-path: inset(106px 0 99px);
  }
  65% {
    clip-path: inset(141px 0 74px);
  }
  70% {
    clip-path: inset(20px 0 78px);
  }
  75% {
    clip-path: inset(133px 0 79px);
  }
  80% {
    clip-path: inset(78px 0 52px);
  }
  85% {
    clip-path: inset(35px 0 39px);
  }
  90% {
    clip-path: inset(67px 0 70px);
  }
  95% {
    clip-path: inset(71px 0 103px);
  }
  100% {
    clip-path: inset(83px 0 40px);
  }
`;

export const NoMatchMain = styled.main`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: black;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.familyFont.primary};

  .back-home {
    margin: 50px 0 0;
    color: #c4bebe;
    display: block;
    text-decoration: none;

    &:hover {
      color: #01f1e3;
    }
  }
`;

export const Glitch = styled.h3`
  margin: 0;
  padding: 20px 0;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 45px;
  transform: scale(2);
  letter-spacing: 2px;
  text-transform: uppercase;
  user-select: none;

  ::before {
    padding: 20px 0;
    color: white;
    content: '404';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
    top: 0;
    left: 3px;
    text-shadow: -2px 0 red;
    animation: ${glitchOne} 2s linear infinite reverse;
  }

  ::after {
    padding: 20px 0;
    content: '404';
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    background: black;
    overflow: hidden;
    top: 0;
    left: -3px;
    text-shadow: -2px 0 blue;
    animation: ${glitchTwo} 2s linear infinite reverse;
  }
`;
