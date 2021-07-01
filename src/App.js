import Router from './pages/index';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { vagabondTheme } from './themes/vagabond';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }
`;

function App() {
  return (
    <ThemeProvider theme={vagabondTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
