import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ::selection {
    text-shadow: none;
    color: #111;
    background: #d9d9d9;
  }
  
  html {
    scrollbar-color: #d6d6d6 #0b0b0b;
    scrollbar-width: thin;
  }

  *, ::after, ::before {
  box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #0b0b0b;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #d6d6d6;
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #e4e4e4;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to top,#0b0b0b 0%,#000 100%);
    color: #d6d6d6;
    font-family: 'Rajdhani', sans-serif, system-ui;
    overflow: hidden auto;
  }`;
