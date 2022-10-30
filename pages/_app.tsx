import '../styles/globals.css'
import Header from '../components/Header'
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import { useEffect } from "react";
import analytics from "../utils/analytics";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {

   useEffect(() => {
     analytics.page();
   }, []);

   const router = useRouter();
   useEffect(() => {
     const handleRouteChange = (url:string) => {
       gtag.pageview(url);
     };
     router.events.on("routeChangeComplete", handleRouteChange);
     router.events.on("hashChangeComplete", handleRouteChange);
     return () => {
       router.events.off("routeChangeComplete", handleRouteChange);
       router.events.off("hashChangeComplete", handleRouteChange);
     };
   }, [router.events]);

  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
