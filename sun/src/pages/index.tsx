import Head from '@comp/head';
import Hero from '@comp/hero';
import { Main } from '@comp/styled';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Information = dynamic(() => import('@comp/information'));

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
