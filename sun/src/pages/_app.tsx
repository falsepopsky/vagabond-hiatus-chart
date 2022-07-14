import Footer from 'component/footer';
import { GlobalStyle } from 'component/layout/globalStyle';

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
