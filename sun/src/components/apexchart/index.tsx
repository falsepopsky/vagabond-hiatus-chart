import dynamic from 'next/dynamic';

export const ChartWrapper = dynamic(() => import('./chart'), { ssr: false });
