import Router from './pages/index';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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

const vagabondTheme = {
  familyFont: {
    primary: 'HelveticaNowDisplayRegular',
    secondary: 'VarelaRound',
    hero: 'Teko',
  },
  sizeFont: {
    l: '48px',
    m: '26px',
    s: '13px',
  },
  colors: {
    primary: '#d6d6d6',
    secondary: '#0b0b0b',
  },
};

function App() {
  return (
    <ThemeProvider theme={vagabondTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
