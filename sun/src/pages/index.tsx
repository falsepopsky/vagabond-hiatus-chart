import Head from 'component/head';
import Hero from 'component/hero';
import { Main } from 'component/layout';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Information = dynamic(() => import('component/information'));

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Hero />
      <Main>
        <Information />
      </Main>
    </>
  );
};

export default Home;
