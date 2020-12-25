import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import Data from '../data/test';

const HiatusChart = () => {
  return (
    <>
      <Row className="text-center">
        <Col style={{ width: '100%', height: '600px' }}>
          <ResponsiveHeatMap
            data={Data}
            keys={[
              'week 1',
              'week 2',
              'week 3',
              'week 4',
              'week 5',
              'week 6',
              'week 7',
              'week 8',
              'week 9',
              'week 10',
              'week 11',
              'week 12',
              'week 13',
              'week 14',
              'week 15',
              'week 16',
              'week 17',
              'week 18',
              'week 19',
              'week 20',
              'week 21',
              'week 22',
              'week 23',
              'week 24',
              'week 25',
              'week 26',
              'week 27',
              'week 28',
              'week 29',
              'week 30',
              'week 31',
              'week 32',
              'week 33',
              'week 34',
              'week 35',
              'week 36',
              'week 37',
              'week 38',
              'week 39',
              'week 40',
              'week 41',
              'week 42',
              'week 43',
              'week 44',
              'week 45',
              'week 46',
              'week 47',
              'week 48',
              'week 49',
              'week 50',
              'week 51',
              'week 52',
              'week 53',
            ]}
            indexBy="year"
            margin={{ top: 50, right: 60, bottom: 100, left: 60 }}
            forceSquare={true}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 3,
              tickPadding: 3,
              tickRotation: -90,
              legend: 'Week',
              legendPosition: 'middle',
              legendOffset: 70,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 3,
              tickPadding: 3,
              tickRotation: 0,
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: -50,
            }}
            cellOpacity={1}
            cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', '#000000']],
            }}
            animate={false}
            motionConfig="wobbly"
            motionStiffness={80}
            motionDamping={9}
            hoverTarget="cell"
            cellHoverOthersOpacity={0.25}
            isInteractive={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default HiatusChart;
