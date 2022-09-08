import { ApexOptions } from 'apexcharts';

const TreemapDB: ApexOptions = {
  chart: {
    type: 'treemap',
    background: 'transparent',
    height: 400,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  legend: {
    show: true,
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
          y: 4,
        },
        {
          x: 'Year 2015',
          y: 1,
        },
      ],
    },
  ],
  theme: {
    mode: 'dark',
    palette: 'palette7',
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
      data: [0, 8, 13, 14, 22, 29, 37, 30, 25, 26, 31, 21, 35, 48, 40, 37, 42, 47, 48, 49, 48, 48, 48, 48, 26],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  chart: {
    height: 380,
    type: 'area',
    background: 'transparent',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
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
    tooltip: {
      enabled: false,
    },
  },
  colors: ['#1ee979', '#e91e63'],
  theme: {
    mode: 'dark',
  },
};

const ArcDB: ApexOptions = {
  series: [
    {
      name: '2022',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1,
      ],
    },
    {
      name: '2021',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2020',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2019',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2018',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2017',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2016',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2015',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2014',
      data: [
        1, 1, 2, 12, 2, 1, 12, 1, 13, 1, 1, 13, 1, 1, 1, 13, 1, 1, 1, 13, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2013',
      data: [
        1, 1, 2, 12, 2, 1, 12, 1, 1, 1, 1, 12, 1, 1, 1, 12, 1, 1, 1, 12, 1, 2, 1, 12, 1, 1, 1, 1, 12, 1, 1, 1, 12, 1, 1,
        1, 2, 1, 1, 1, 1, 12, 1, 1, 1, 12, 1, 1, 1, 1, 12, 1,
      ],
    },
    {
      name: '2012',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 12, 1, 2, 1, 12, 1, 1, 1, 1, 12, 1, 1, 1, 12, 1, 1,
        1, 2, 12, 1, 1, 1, 12, 1, 1, 1, 12, 1, 1, 1, 12, 1, 1,
      ],
    },
    {
      name: '2011',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2010',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 11, 11, 11, 1, 1, 11, 11, 1, 11, 11, 11, 11, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11,
        11, 11, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2009',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 2, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11,
        11, 11, 1, 1, 2, 1, 1, 11, 11, 11, 11, 1, 11, 11, 11, 11, 1, 1, 1, 11,
      ],
    },
    {
      name: '2008',
      data: [
        1, 1, 2, 1, 2, 1, 1, 10, 10, 10, 10, 10, 1, 10, 10, 10, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        10, 10, 2, 10, 10, 1, 1, 10, 10, 1, 1, 10, 10, 10, 1, 1, 1, 1,
      ],
    },
    {
      name: '2007',
      data: [
        9, 9, 2, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 2, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 2, 9,
        9, 9, 9, 9, 9, 1, 9, 1, 1, 1, 1, 1, 1, 1, 10,
      ],
    },
    {
      name: '2006',
      data: [
        1, 1, 1, 2, 9, 2, 9, 1, 1, 9, 9, 9, 9, 1, 9, 9, 9, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 1, 1, 9, 2,
        9, 9, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 1, 1, 9, 9,
      ],
    },
    {
      name: '2005',
      data: [
        1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 2,
        1, 1, 1, 1, 9, 9, 9, 9, 1, 9, 9, 9, 9, 9, 1,
      ],
    },
    {
      name: '2004',
      data: [
        8, 1, 2, 8, 2, 1, 8, 1, 8, 1, 8, 1, 8, 1, 1, 1, 8, 1, 8, 1, 8, 2, 1, 1, 1, 8, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    },
    {
      name: '2003',
      data: [
        8, 1, 2, 8, 2, 1, 8, 1, 8, 1, 8, 1, 8, 1, 1, 1, 8, 1, 1, 1, 1, 2, 1, 8, 1, 8, 1, 8, 1, 8, 1, 1, 1, 8, 1, 8, 2,
        1, 8, 1, 8, 1, 1, 8, 1, 1, 8, 1, 8, 1, 8, 1,
      ],
    },
    {
      name: '2002',
      data: [
        7, 7, 2, 7, 2, 7, 1, 1, 8, 8, 8, 8, 1, 1, 1, 8, 8, 8, 8, 1, 8, 2, 1, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 2,
        8, 1, 8, 1, 8, 1, 8, 1, 1, 8, 1, 8, 1, 8, 1,
      ],
    },
    {
      name: '2001',
      data: [
        6, 2, 6, 2, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 6, 6, 6, 6, 2, 6, 7, 7, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 2,
        7, 7, 1, 1, 7, 7, 1, 1, 1, 1, 1, 7, 7, 7, 7,
      ],
    },
    {
      name: '2000',
      data: [
        5, 5, 2, 5, 2, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 2, 5, 5, 5, 5, 1, 1, 5, 1, 1, 5, 5, 5, 1, 1,
        2, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 1, 6, 6, 1, 6,
      ],
    },
    {
      name: '1999',
      data: [
        3, 3, 2, 3, 2, 1, 3, 3, 3, 3, 3, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 2, 4, 4, 4, 4, 4, 4, 5, 5, 1, 5, 1, 5, 5, 5, 2,
        5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5,
      ],
    },
    {
      name: '1998',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
      ],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  colors: ['transparent'],
  chart: {
    height: 440,
    type: 'heatmap',
    background: 'transparent',
    animations: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'stepline',
    colors: ['#000000'],
  },
  xaxis: {
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
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  legend: {
    showForZeroSeries: false,
    showForNullSeries: false,
    position: 'bottom',
    markers: {
      offsetX: 0,
      offsetY: 0,
    },
  },
  plotOptions: {
    heatmap: {
      radius: 0,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            name: 'Hiatus',
            from: 1,
            to: 1,
            color: '#ff4f4f',
          },
          {
            name: 'Double weekly issue',
            from: 2,
            to: 2,
            color: '#d9d9d9',
          },
          {
            name: 'Takezō',
            from: 3,
            to: 3,
            color: '#95e784',
          },
          {
            name: 'First Yoshioka',
            from: 4,
            to: 4,
            color: '#fff875',
          },
          {
            name: 'Hōzōin',
            from: 5,
            to: 5,
            color: '#28666e',
          },
          {
            name: 'Yagyū',
            from: 6,
            to: 6,
            color: '#06ba63',
          },
          {
            name: 'Baiken',
            from: 7,
            to: 7,
            color: '#64ffdb',
          },
          {
            name: 'Kojirō',
            from: 8,
            to: 8,
            color: '#a42cd6',
          },
          {
            name: 'Second Yoshioka',
            from: 9,
            to: 9,
            color: '#ffe156',
          },
          {
            name: "Ichijōji's aftermath",
            from: 10,
            to: 10,
            color: '#7d80da',
          },
          {
            name: 'Wandering',
            from: 11,
            to: 11,
            color: '#3777ff',
          },
          {
            name: 'Farming',
            from: 12,
            to: 12,
            color: '#4059ad',
          },
          {
            name: 'Hosokawa',
            from: 13,
            to: 13,
            color: '#03c887',
          },
        ],
      },
    },
  },
  grid: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  theme: {
    mode: 'dark',
  },
};

const HeatmapDB: ApexOptions = {
  series: [
    {
      name: '2022',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3,
      ],
    },
    {
      name: '2021',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2020',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2019',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2018',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
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
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2015',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2014',
      data: [
        3, 3, 2, 1, 2, 3, 1, 3, 1, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2013',
      data: [
        3, 3, 2, 1, 2, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 1, 3, 2, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 2,
        3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3,
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
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2010',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1, 3, 1, 1, 1, 1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2009',
      data: [
        3, 3, 2, 3, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 2,
        3, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 3, 3, 1,
      ],
    },
    {
      name: '2008',
      data: [
        3, 3, 2, 3, 2, 3, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2,
        1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 1, 3, 3, 3, 3,
      ],
    },
    {
      name: '2007',
      data: [
        1, 1, 2, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1,
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
        3, 3, 3, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3,
      ],
    },
    {
      name: '2004',
      data: [
        1, 3, 2, 1, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 2, 3, 3, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ],
    },
    {
      name: '2003',
      data: [
        1, 3, 2, 1, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 3, 3, 3, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 2,
        3, 1, 3, 1, 3, 3, 1, 3, 3, 1, 3, 1, 3, 1, 3,
      ],
    },
    {
      name: '2002',
      data: [
        1, 1, 2, 1, 2, 1, 3, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 3, 1, 2, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2,
        1, 3, 1, 3, 1, 3, 1, 3, 3, 1, 3, 1, 3, 1, 3,
      ],
    },
    {
      name: '2001',
      data: [
        1, 2, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 2, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1,
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
        1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1,
      ],
    },
    {
      name: '1998',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
      ],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  colors: ['transparent'],
  chart: {
    height: 440,
    type: 'heatmap',
    background: 'transparent',
    animations: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'stepline',
    colors: ['#000000'],
  },
  xaxis: {
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
    crosshairs: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  legend: {
    showForZeroSeries: false,
    showForNullSeries: false,
    position: 'bottom',
    markers: {
      offsetX: 0,
      offsetY: 0,
    },
  },
  plotOptions: {
    heatmap: {
      radius: 0,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            name: 'Published',
            from: 1,
            to: 1,
            color: '#70DDC6',
          },
          {
            name: 'Double weekly issue',
            from: 2,
            to: 2,
            color: '#f4f7f3',
          },
          {
            name: 'Hiatus',
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
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  theme: {
    mode: 'dark',
  },
};

export { AreaDB, TreemapDB, ArcDB, HeatmapDB };
