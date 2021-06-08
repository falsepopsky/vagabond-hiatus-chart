import styled, { css, keyframes } from 'styled-components';

const spinnerRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }  
  100% {
    transform: rotate(360deg);
  }
`;

const animationSpinner = css`
  ${spinnerRotate} 0.7s ease infinite;
`;

export const Spinner = styled.div`
  content: '';
  width: 60px;
  height: 60px;
  margin-top: -30px;
  margin-left: -30px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #01f1e3;
  border-bottom-color: #01f1e3;
  animation: ${animationSpinner};
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
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const LoaderTitle = styled.h2`
  margin: 2em 0;
  font-family: var(--font-family-primary);
  font-size: x-large;

  ::selection {
    text-shadow: none;
    color: white;
    background: blue;
  }

  @media (min-width: 576px) {
    font-size: var(--text-size-primary);
  }
`;
