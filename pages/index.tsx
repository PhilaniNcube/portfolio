
import type { NextPage } from 'next'

import Head from 'next/head'

import { useEffect } from 'react'
import { Fragment } from 'react'
import Hero from "../components/Personal";
import Main from '../components/Main';
import Personal from '../components/Personal';
import Timeline from '../components/Timeline';






const Home: NextPage = () => {

  return (
    <Fragment>
      <Head>
        <title> Philani Ncube | Developer Portfolio </title>
      </Head>
      <Main />
      <Personal />
      <Timeline />
    </Fragment>
  );
}

export default Home
