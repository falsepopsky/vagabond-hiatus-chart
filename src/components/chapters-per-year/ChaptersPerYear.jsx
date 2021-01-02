import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveBar } from '@nivo/bar';
import { chaptersPerYearData } from './cpyDatabase';
import { configCPY } from './cpyConfig';

const keysCPY = [
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

const Pubs = () => {
  return (
    <>
      <Row as="section" className="text-center m-0">
        <Col md={12}>
          <h2 className="mt-5">CHAPTERS RELEASED BY YEAR</h2>
        </Col>

        <Col md={12} className="p-0" style={{ width: '100%', height: '500px' }}>
          <ResponsiveBar
            data={chaptersPerYearData}
            keys={keysCPY}
            indexBy="year"
            margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={configCPY.colorBars}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={configCPY.axisBottom}
            axisLeft={configCPY.axisLeft}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={'#000000'}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
          <p>&#32;</p>
        </Col>
      </Row>
    </>
  );
};

export default Pubs;
