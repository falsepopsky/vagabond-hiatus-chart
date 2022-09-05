import Head from '@comp/head';
import Hero from '@comp/hero';
import { Wave } from '@comp/information/svg';
import { Main, Wrapper } from '@comp/styled';
import dynamic from 'next/dynamic';

const Information = dynamic(() => import('@comp/information'));
const Heatmap = dynamic(() => import('@comp/heatmap'));
const Cpy = dynamic(() => import('@comp/chaptersperyear'));
const Tree = dynamic(() => import('@comp/treemap'));

export default function Home() {
  return (
    <>
      <Head />
      <Hero />
      <Main>
        <Wave />
        <Wrapper>
          <Information />
          <Heatmap />
          <Cpy />
          <Tree />
        </Wrapper>
      </Main>
    </>
  );
}
