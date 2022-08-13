import { ApexOptions } from 'apexcharts';
import ChartWrapper from '../apexchart';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { TreeSVG } from './svg';

const Treemap = () => {
  const myDB: ApexOptions = {
    chart: {
      type: 'treemap',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      height: 400,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: 'inherit',
        fontWeight: 'bold',
      },
    },
    legend: {
      show: true,
      labels: { colors: ['#ffffff'] },
      itemMargin: {
        vertical: 20,
      },
    },
    series: [
      {
        name: 'Takezō',
        data: [
          {
            x: 'Year 1998',
            y: 13,
          },
          {
            x: 'Year 1999',
            y: 8,
          },
        ],
      },
      {
        name: 'First Yoshioka',
        data: [
          {
            x: 'Year 1999',
            y: 14,
          },
        ],
      },
      {
        name: 'Hōzōin',
        data: [
          {
            x: 'Year 1999',
            y: 18,
          },
          {
            x: 'Year 2000',
            y: 25,
          },
        ],
      },
      {
        name: 'Yagyū',
        data: [
          {
            x: 'Year 2000',
            y: 11,
          },
          {
            x: 'Year 2001',
            y: 16,
          },
        ],
      },
      {
        name: 'Baiken',
        data: [
          {
            x: 'Year 2001',
            y: 18,
          },
          {
            x: 'Year 2002',
            y: 4,
          },
        ],
      },
      {
        name: 'Kojirō',
        data: [
          {
            x: 'Year 2002',
            y: 22,
          },
          {
            x: 'Year 2003',
            y: 19,
          },
          {
            x: 'Year 2004',
            y: 11,
          },
        ],
      },
      {
        name: 'Second Yoshioka',
        data: [
          {
            x: 'Year 2005',
            y: 18,
          },
          {
            x: 'Year 2006',
            y: 24,
          },
          {
            x: 'Year 2007',
            y: 21,
          },
        ],
      },
      {
        name: "Ichijōji's aftermath",
        data: [
          {
            x: 'Year 2007',
            y: 1,
          },
          {
            x: 'Year 2008',
            y: 17,
          },
          {
            x: 'Year 2009',
            y: 9,
          },
        ],
      },
      {
        name: 'Wandering',
        data: [
          {
            x: 'Year 2009',
            y: 18,
          },
          {
            x: 'Year 2010',
            y: 13,
          },
          {
            x: 'Year 2012',
            y: 1,
          },
        ],
      },
      {
        name: 'Farming',
        data: [
          {
            x: 'Year 2012',
            y: 8,
          },
          {
            x: 'Year 2013',
            y: 11,
          },
          {
            x: 'Year 2014',
            y: 2,
          },
        ],
      },
      {
        name: 'Hosokawa',
        data: [
          {
            x: 'Year 2014',
            y: 8,
          },
          {
            x: 'Year 2015',
            y: 1,
          },
        ],
      },
    ],
    stroke: {
      show: true,
      curve: 'smooth',
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <TreeSVG />
        </IconContainer>
        <HeaderTwo>Chapters per year</HeaderTwo>
      </RowContainer>
      <ChartWrapper config={myDB} />
    </ColumnContainer>
  );
};

export default Treemap;
