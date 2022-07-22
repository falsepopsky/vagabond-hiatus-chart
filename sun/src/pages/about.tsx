import Head from '@comp/head';
import History from '@comp/history';
import { Main, Wrapper } from '@comp/styled';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@comp/contact'));
const Thanks = dynamic(() => import('@comp/thanks'));

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
