import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { datita } from './cpaData';

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
          style={{ width: '100%', height: '460px' }}>
          <ResponsiveTreeMap
            data={datita.root}
            identity="name"
            value="loc"
            valueFormat=".02s"
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            labelSkipSize={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
            parentLabelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            borderColor={{ from: 'color', modifiers: [['darker', 0.1]] }}
          />
          <p className="easter-egg">what do you want?</p>
        </Col>
      </Row>
    </>
  );
};

export default Pubs;
