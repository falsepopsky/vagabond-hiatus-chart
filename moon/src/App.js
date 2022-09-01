import { createGlobalStyle } from 'styled-components';
import Router from './pages/index';

const GlobalStyle = createGlobalStyle`
  :root {
    scrollbar-color: #d6d6d6 black;
    scrollbar-width: thin;
  }

  ::selection {
    text-shadow: none;
    color: #0b0b0b;
    background: #d6d6d6;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: #d6d6d6;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e4e4e4;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
