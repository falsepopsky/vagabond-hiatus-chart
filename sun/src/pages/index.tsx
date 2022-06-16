import type { NextPage } from 'next';
import Hero from '../components/hero/index';
import Head from '../components/head/index';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Hero />
    </>
  );
};

export default Home;
