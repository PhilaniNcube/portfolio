import '../styles/globals.css'
import Header from '../components/Header'
import type { AppProps } from 'next/app'
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
