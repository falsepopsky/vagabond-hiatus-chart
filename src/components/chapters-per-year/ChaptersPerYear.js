import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveBar } from '@nivo/bar';
import Data from './cpyData';

const Pubs = () => {
  const keys = [
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
  ];
  const colorBars = [
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(112.2, 73.53%, 73.33%)',
    'hsl(112.2, 73.53%, 73.33%)',
    'hsl(112.2, 73.53%, 73.33%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(167.8, 74.68%, 69.02%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(0, 0, 0)',
    'hsl(1.13, 83.25%, 62.55%)',
    'hsl(44.13, 83.78%, 63.73%)',
    'hsl(1.13, 83.25%, 62.55%)',
    'hsl(1.13, 83.25%, 62.55%)',
    'hsl(0, 0, 0)',
    'hsl(0, 0, 0)',
    'hsl(0, 0, 0)',
    'hsl(0, 0, 0)',
    'hsl(0, 0, 0)',
    'hsl(0, 0, 0)',
  ];

  return (
    <>
      <Row as="section" className="text-center m-0">
        <Col className="mt-5" style={{ width: '100%', height: '500px' }}>
          <h2 className="mt-5">CHAPTERS RELEASED BY YEAR</h2>
          <ResponsiveBar
            data={Data}
            keys={keys}
            indexBy="year"
            margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
            padding={0.3}
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
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: 52,
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
        </Col>
      </Row>
    </>
  );
};

export default Pubs;
