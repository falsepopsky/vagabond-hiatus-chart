import { ApexOptions } from 'apexcharts';
import ChartWrapper from '../apexchart';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { HeatSVG } from './svg';

const Heatmap = () => {
  const myDB: ApexOptions = {
    series: [
      {
        name: '2022',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      },
      {
        name: '2021',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2020',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2019',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2018',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2017',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        ],
      },
      {
        name: '2016',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2015',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2014',
        data: [
          3, 3, 2, 1, 2, 3, 1, 3, 1, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2013',
        data: [
          3, 3, 2, 1, 2, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 2, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 2,
          3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 0,
        ],
      },
      {
        name: '2012',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 2, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3,
          2, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3,
        ],
      },
      {
        name: '2011',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2010',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1, 3, 1, 1, 1, 1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2009',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 2,
          3, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 3, 3, 1, 0,
        ],
      },
      {
        name: '2008',
        data: [
          3, 3, 2, 3, 2, 3, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2,
          1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 1, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2007',
        data: [
          1, 1, 2, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 1,
          1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0,
        ],
      },
      {
        name: '2006',
        data: [
          3, 3, 3, 2, 1, 2, 1, 3, 3, 1, 1, 1, 1, 3, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 2,
          1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1,
        ],
      },
      {
        name: '2005',
        data: [
          3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2,
          3, 3, 3, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 0,
        ],
      },
      {
        name: '2004',
        data: [
          1, 3, 2, 1, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 2, 3, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        ],
      },
      {
        name: '2003',
        data: [
          1, 3, 2, 1, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 2,
          3, 1, 3, 1, 3, 3, 1, 3, 3, 1, 3, 1, 3, 1, 3, 0,
        ],
      },
      {
        name: '2002',
        data: [
          1, 1, 2, 1, 2, 1, 3, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 3, 1, 2, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2,
          1, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3, 1, 3, 1, 3, 0,
        ],
      },
      {
        name: '2001',
        data: [
          1, 2, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 2, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2,
          1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0,
        ],
      },
      {
        name: '2000',
        data: [
          1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 1, 1, 1, 1, 3, 3, 1, 3, 3, 1, 1, 1, 3, 3,
          2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1,
        ],
      },
      {
        name: '1999',
        data: [
          1, 1, 2, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 2,
          1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0,
        ],
      },
      {
        name: '1998',
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        ],
      },
    ],
    dataLabels: {
      enabled: false,
    },
    chart: {
      height: 440,
      type: 'heatmap',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'square',
      colors: ['#000000'],
    },
    xaxis: {
      type: 'category',
      categories: [
        '#1',
        '#2',
        '#3',
        '#4',
        '#5',
        '#6',
        '#7',
        '#8',
        '#9',
        '#10',
        '#11',
        '#12',
        '#13',
        '#14',
        '#15',
        '#16',
        '#17',
        '#18',
        '#19',
        '#20',
        '#21',
        '#22',
        '#23',
        '#24',
        '#25',
        '#26',
        '#27',
        '#28',
        '#29',
        '#30',
        '#31',
        '#32',
        '#33',
        '#34',
        '#35',
        '#36',
        '#37',
        '#38',
        '#39',
        '#40',
        '#41',
        '#42',
        '#43',
        '#44',
        '#45',
        '#46',
        '#47',
        '#48',
        '#49',
        '#50',
        '#51',
        '#52',
        '#53',
      ],
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: '#e2e2e2',
        },
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#e2e2e2',
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
    },
    plotOptions: {
      heatmap: {
        radius: 0,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: 'rgba(244, 247, 243, 0)',
            },
            {
              from: 1,
              to: 1,
              color: '#70DDC6',
            },
            {
              from: 2,
              to: 2,
              color: '#f4f7f3',
            },
            {
              from: 3,
              to: 3,
              color: '#F95D5A',
            },
          ],
        },
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
  };

  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <HeatSVG />
        </IconContainer>
        <HeaderTwo>Chapters per year</HeaderTwo>
      </RowContainer>
      <ChartWrapper config={myDB} />
    </ColumnContainer>
  );
};

export default Heatmap;
