export const configCPY = {
  yScale: {
    type: 'linear',
    min: 'auto',
    max: 'auto',
    stacked: false,
    reverse: false,
  },
  axisBottom: {
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 3,
    tickRotation: 0,
    legend: 'year',
    legendOffset: 40,
    legendPosition: 'middle',
  },
  axisLeft: {
    orient: 'left',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'chapters',
    legendOffset: -46,
    legendPosition: 'middle',
  },
  colors: ['hsl(157, 70%, 50%)', 'hsl(10, 70%, 50%)'],
  legends: [
    {
      anchor: 'right',
      direction: 'column',
      justify: false,
      translateX: 90,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 18,
      itemOpacity: 0.75,
      symbolSize: 10,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [
        {
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
  defs: [
    {
      id: 'gradientA',
      type: 'linearGradient',
      colors: [
        { offset: 0, color: '#7ef29d' },
        { offset: 100, color: '#0f68a9' },
      ],
    },
    {
      id: 'gradientB',
      type: 'linearGradient',
      colors: [
        { offset: 0, color: '#f89b29' },
        { offset: 100, color: '#ff0f7b' },
      ],
    },
  ],
  fill: [
    {
      match: { id: 'Released' },
      id: 'gradientA',
    },
    {
      match: { id: 'Not released' },
      id: 'gradientB',
    },
  ],
};
