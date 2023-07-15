import Head from '@/comp/head';
import History from '@/comp/history';
import { Main, Wrapper } from '@/comp/styled';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@/comp/contact'));
const Thanks = dynamic(() => import('@/comp/thanks'));

export default function About() {
  return (
    <>
      <Head title='About' description='Everything about the vagabond hiatus chart project.' />
      <Main>
        <Wrapper isAbout>
          <History />
         <Thanks /> 
          <Contact />
        </Wrapper>
      </Main>
    </>
  );
}
