import { ResponsiveLine } from '@nivo/line';
import { themeNivo } from '../../themes/nivo';

export const Line = ({ dataCPY }) => {
  const configCPY = {
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

  return (
    <ResponsiveLine
      data={dataCPY}
      theme={themeNivo}
      colors={configCPY.colors}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={configCPY.yScale}
      axisBottom={configCPY.axisBottom}
      axisLeft={configCPY.axisLeft}
      enableGridX={false}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={1}
      pointBorderColor='#ffffff'
      enableArea={true}
      areaOpacity={0.75}
      enableSlices='x'
      enableCrosshair={false}
      legends={configCPY.legends}
      defs={configCPY.defs}
      fill={configCPY.fill}
    />
  );
};
