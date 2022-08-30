import styled, { keyframes } from 'styled-components';

const spinnerRotate = keyframes`
  0% {
    transform: rotateX(38deg) rotateY(40deg) rotateZ(0deg);
  }  
  100% {
    transform: rotateX(38deg) rotateY(40deg) rotateZ(360deg);
  }
`;

export const Spinner = styled.div`
  content: '';
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px dotted white;
  transform-style: preserve-3d;
  animation: ${spinnerRotate} 6s linear infinite;
`;

export const LoadingContainer = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  color: white;
  background-color: #000000;
  justify-content: center;
  align-items: center;
`;

export const LoaderTitle = styled.h2`
  margin: 1em 0;
  font-size: x-large;

  ::selection {
    text-shadow: none;
    color: white;
    background: blue;
  }

  @media (min-width: 576px) {
    font-size: ${({ theme }) => theme.sizeFont.m};
  }
`;
