
import type { NextPage } from 'next'

import Head from 'next/head'

import { useEffect } from 'react'
import { Fragment } from 'react'
import Hero from "../components/Hero";
import Main from '../components/Main';






const Home: NextPage = () => {

  return (
    <Fragment>
      <Head>
        <title> Philani Ncube | Developer Portfolio </title>
      </Head>
      <Main />

    </Fragment>
  );
}

export default Home
