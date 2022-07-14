import ApexCharts, { ApexOptions } from 'apexcharts';
import { useEffect, useRef, useState } from 'react';

interface ChartWrapperProps {
  config: ApexOptions;
}

const ReactApexChart = ({ config }: ChartWrapperProps) => {
  // Ref for the chart instance
  const chartRef = useRef<HTMLDivElement>(null);

  // State
  const [loading, setLoading] = useState(true);

  // Effect
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (config && loading) {
      // config props received, now we can render the chart
      console.log('config props received, setting loading to false');
      handleLoad();
    }

    if (config && loading === false) {
      console.log('new chart');
      const Chart = new ApexCharts(chartRef.current, config);
      Chart.render();
      return () => {
        console.log('chart destroyed');
        Chart.destroy();
      };
    }
  }, [config, loading]);

  console.count('render chart component');

  if (!config) {
    return <div>You need the config file.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div ref={chartRef}></div>;
};

export default ReactApexChart;
