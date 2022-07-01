import Head from 'component/head';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('component/chaptersperyear'), {
  ssr: false,
});
const Chart: NextPage = () => {
  return (
    <>
      <Head />
      <LineChart />
    </>
  );
};

export default Chart;
