'use client';

import ApexCharts, { type ApexOptions } from 'apexcharts';
import { useEffect, useRef } from 'react';

interface PropsApex {
  config: ApexOptions;
}

const ApexChart = (props: PropsApex) => {
  const { config } = props;
  // Ref for the chart instance
  const chartRef = useRef<HTMLDivElement>(null);

  // Run effect
  useEffect(() => {
    // If config props received and ref isn't null, render the chart
    // Maybe use undefined instead of null to check if config is received ?
    // (typeof config && chartRef.current) !== null || undefined
    if (typeof config && chartRef.current !== null) {
      const Chart = new ApexCharts(chartRef.current, config);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      Chart.render();
      return () => {
        Chart.destroy();
      };
    }
  }, [config]);

  return <div ref={chartRef} />;
};

export default ApexChart;
