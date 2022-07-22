import Footer from '@comp/footer';
import { GlobalStyle } from '@comp/styled/globalStyle';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
