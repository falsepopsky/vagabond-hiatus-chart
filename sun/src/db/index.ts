import { ApexOptions } from 'apexcharts';

const TreemapDB: ApexOptions = {
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

const AreaDB: ApexOptions = {
  series: [
    {
      name: 'Published chapters',
      data: [13, 40, 36, 34, 26, 19, 11, 18, 24, 22, 17, 27, 13, 0, 9, 11, 6, 1, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: 'Hiatus chapters',
      data: [0, 8, 13, 14, 22, 29, 37, 30, 25, 26, 31, 21, 35, 48, 40, 37, 42, 47, 48, 49, 48, 48, 48, 48, 25],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    height: 380,
  },
  stroke: {
    show: true,
    curve: 'smooth',
  },
  yaxis: {
    labels: { style: { colors: '#d9d9d9' } },
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
    labels: { style: { colors: '#d9d9d9' } },
  },
  colors: ['#1ee979', '#e91e63'],
  legend: { labels: { colors: ['#ffffff'] } },
  tooltip: {
    theme: 'dark',
  },
};

export { AreaDB, TreemapDB };
