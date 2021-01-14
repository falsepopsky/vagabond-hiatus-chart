import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveLine } from '@nivo/line';
import { testDatabase } from './testdatabase';
import { configCPY } from './cpyConfig';
import { themeNivo } from '../theme/themeNivo';

let defs = [
  {
    id: 'gradientA',
    type: 'linearGradient',
    colors: [
      { offset: 0, color: '#00ff87' },
      { offset: 100, color: '#60efff' },
    ],
  },
  {
    id: 'gradientB',
    type: 'linearGradient',
    colors: [
      { offset: 0, color: '#ff0f7b' },
      { offset: 100, color: '#f89b29' },
    ],
  },
];

let fill = [
  {
    match: { id: 'released' },
    id: 'gradientA',
  },
  {
    match: { id: 'not released' },
    id: 'gradientB',
  },
];

const Test = () => {
  return (
    <>
      <Row as="section" className="text-center m-0 bg-dark">
        <Col
          md={12}
          style={{ width: '100%', height: '460px', padding: '0 5vw' }}>
          <ResponsiveLine
            data={testDatabase}
            theme={themeNivo}
            colors={['hsl(157, 70%, 50%)', 'hsl(10, 70%, 50%)']}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: false,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Years',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Chapters',
              legendOffset: -46,
              legendPosition: 'middle',
            }}
            enableGridX={false}
            pointColor={{ from: 'color', modifiers: [] }}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel={function (e) {
              return e.x + ': ' + e.y;
            }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaBlendMode="normal"
            areaOpacity={0.8}
            enableSlices="x"
            crosshairType="top-left"
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 104,
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
            ]}
            defs={defs}
            fill={fill}
          />
          <p>&#32; hellooo</p>
        </Col>
      </Row>
    </>
  );
};

export default Test;
