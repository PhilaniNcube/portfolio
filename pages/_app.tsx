import '../styles/globals.css'
import Header from '../components/Header'
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import { useEffect } from "react";
import analytics from "../utils/analytics";

function MyApp({ Component, pageProps }: AppProps) {

   useEffect(() => {
     analytics.page();
   }, []);

  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
