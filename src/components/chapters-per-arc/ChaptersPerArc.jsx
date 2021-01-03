import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveBar } from '@nivo/bar';
import Data from './cpaData';
import { ThemeCPA } from './theme';

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

const Pubs = () => {
  return (
    <>
      <Row as="section" className="text-center m-0">
        <Col md={12}>
          <h2 className="mt-5">CHAPTERS RELEASED BY ARC</h2>
        </Col>
        <Col
          md={12}
          className="p-0 mb-5"
          style={{ width: '100%', height: '460px' }}
        >
          <ResponsiveBar
            data={Data}
            keys={keys}
            indexBy="arc"
            theme={ThemeCPA}
            margin={{ top: 50, right: 40, bottom: 160, left: 70 }}
            padding={0.2}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={colorBars}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 3,
              tickPadding: 8,
              tickRotation: -65,
              legend: 'Arcs',
              legendPosition: 'middle',
              legendOffset: 150,
            }}
            axisLeft={{
              tickSize: 3,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Chapters',
              legendPosition: 'middle',
              legendOffset: -50,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={'#000000'}
            animate={false}
          />
          <p className="easter-egg">what do you want?</p>
        </Col>
      </Row>
    </>
  );
};

export default Pubs;
