import Head from 'component/head';
import History from 'component/history';
import { Main, Wrapper } from 'component/layout';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('component/contact'));
const Thanks = dynamic(() => import('component/thanks'));

const About: NextPage = () => {
  return (
    <>
      <Head title='About' description='Everything about the vagabond hiatus chart project.' />
      <Main>
        <Wrapper>
          <History />
          <Thanks />
          <Contact />
        </Wrapper>
      </Main>
    </>
  );
};

export default About;
