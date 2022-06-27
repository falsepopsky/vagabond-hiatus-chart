import Head from 'component/head';
import Hero from 'component/hero';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('component/footer'));

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Hero />
      <DynamicFooter />
    </>
  );
};

export default Home;
