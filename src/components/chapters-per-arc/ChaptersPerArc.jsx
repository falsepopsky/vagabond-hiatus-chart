import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveBar } from '@nivo/bar';
import Data from './cpaData';

const Pubs = () => {
  const keys = [
    '1 arc',
    '2 arc',
    '3 arc',
    '4 arc',
    '5 arc',
    '6 arc',
    '7 arc',
    '8 arc',
    '9 arc',
    '10 arc',
    '11 arc',
  ];
  const colorBars = [
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(112.2, 73.53%, 73.33%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(112.2, 73.53%, 73.33%)',
    'hsl(112.2, 73.53%, 73.33%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(44.13, 83.78%, 63.73%)',
  ];

  return (
    <>
      <Row as="section" className="text-center m-0">
        <Col style={{ width: '100%', height: '500px' }}>
          <h2 className="mt-5">CHAPTERS RELEASED BY ARC</h2>
          <ResponsiveBar
            data={Data}
            keys={keys}
            indexBy="arc"
            margin={{ top: 50, right: 60, bottom: 110, left: 60 }}
            padding={0.2}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={colorBars}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 8,
              tickPadding: 8,
              tickRotation: -65,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 100,
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Chapters',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={'#000000'}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
          <p>Arc</p>
        </Col>
      </Row>
    </>
  );
};

export default Pubs;
