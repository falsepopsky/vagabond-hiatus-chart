import Head from '@comp/head';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('@comp/heatmap'), {
  ssr: false,
});

export default function Chart() {
  return (
    <>
      <Head />
      <LineChart />
    </>
  );
}
