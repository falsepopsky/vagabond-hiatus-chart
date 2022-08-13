import Head from '@comp/head';
import Hero from '@comp/hero';
import { Wave } from '@comp/information/svg';
import { Main, Wrapper } from '@comp/styled';
import dynamic from 'next/dynamic';

const Information = dynamic(() => import('@comp/information'));
const Cpy = dynamic(() => import('@comp/chaptersperyear'), { ssr: false });
const Tree = dynamic(() => import('@comp/treemap'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head />
      <Hero />
      <Main>
        <Wave />
        <Wrapper>
          <Information />
          <Cpy />
          <Tree />
        </Wrapper>
      </Main>
    </>
  );
}
