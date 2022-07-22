import Head from '@comp/head';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('@comp/heatmap'), {
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
