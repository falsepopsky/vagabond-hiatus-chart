import Contact from 'component/contact';
import Head from 'component/head';
import History from 'component/history';
import { Main, Wrapper } from 'component/layout';
import Thanks from 'component/thanks';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const DynamicFooter = dynamic(() => import('component/footer'));

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
      <DynamicFooter />
    </>
  );
};

export default About;
