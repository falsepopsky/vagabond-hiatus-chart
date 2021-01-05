import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveBar } from '@nivo/bar';
import { chaptersPerYearData } from './cpyDatabase';
import { configCPY } from './cpyConfig';

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
            keys={configCPY.keysCPY}
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
            animate={false}
          />
          <p>&#32; hey</p>
        </Col>
      </Row>
    </>
  );
};

export default Pubs;
