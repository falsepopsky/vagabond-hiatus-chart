import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    min-height: 100vh;
    background-image: linear-gradient(to bottom, #434343 0%, black 100%);
    color: #d6d6d6;
    font-family: 'Rajdhani', sans-serif, system-ui;
    overflow-x: hidden;
    overflow-y: auto;
  }`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
