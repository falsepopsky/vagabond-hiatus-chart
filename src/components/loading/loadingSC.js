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
  font-family: var(--font-family-primary);
  color: white;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  background-color: #000000;
  text-align: center;
  justify-content: center;
  align-items: center;

  .loading-title {
    margin: 2em 0;
    font-size: var(--text-size-primary);

    &::selection {
      text-shadow: none;
      color: white;
      background: blue;
    }
  }

  @media (max-width: 576px) {
    .loading-title {
      font-size: x-large;
    }
  }
`;
