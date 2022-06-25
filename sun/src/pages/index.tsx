import Footer from 'component/footer';
import Head from 'component/head';
import Hero from 'component/hero';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
