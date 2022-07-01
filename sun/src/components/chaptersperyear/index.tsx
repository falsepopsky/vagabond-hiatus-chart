import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const Data = [
  {
    name: 'Released',
    data: [13, 40, 36, 34, 26, 19, 11, 18, 24, 22, 17, 27, 13, 0, 9, 11, 6, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: 'Not released',
    data: [0, 8, 13, 14, 22, 29, 37, 30, 25, 26, 31, 21, 35, 48, 40, 37, 42, 47, 48, 49, 48, 48, 48, 48, 25],
  },
];

const LineChart = () => {
  const MyOptions: ApexOptions = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
    },
    xaxis: {
      type: 'category',
      categories: [
        '1998',
        '1999',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
    },
    tooltip: {
      x: {
        show: true,
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <div id='chart'>
      <Chart type={'area'} options={MyOptions} series={Data} height={350} />
    </div>
  );
};

export default LineChart;
