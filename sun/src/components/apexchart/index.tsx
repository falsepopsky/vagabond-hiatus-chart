import ApexCharts, { ApexOptions } from 'apexcharts';
import { useEffect, useRef } from 'react';

const ReactApexChart = ({ config }: { config: ApexOptions }) => {
  // Ref for the chart instance
  const chartRef = useRef<HTMLDivElement>(null);

  // Run effect
  useEffect(() => {
    // If config props received and ref isn't null, render the chart
    // Maybe use undefined instead of null to check if config is received ?
    // (typeof config && chartRef.current) !== null || undefined
    if (typeof config && chartRef.current !== null) {
      console.log('chart render');
      const Chart = new ApexCharts(chartRef.current, config);
      Chart.render();
      return () => {
        console.log('chart destroyed');
        Chart.destroy();
      };
    }
  }, [config]);

  console.count('render ReactApexChart component');

  return <div ref={chartRef} />;
};

export default ReactApexChart;
