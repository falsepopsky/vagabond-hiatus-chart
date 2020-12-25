import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import Data from '../data/sample';

const HiatusChart = () => {
  return (
    <>
      <Row className="text-center">
        <Col style={{ width: '100%', height: '500px' }}>
          <ResponsiveHeatMap
            data={Data}
            keys={[
              'hot dog',
              'burger',
              'sandwich',
              'kebab',
              'fries',
              'donut',
              'junk',
              'sushi',
              'ramen',
              'curry',
              'udon',
            ]}
            indexBy="country"
            margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
            forceSquare={true}
            axisTop={{
              orient: 'top',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -90,
              legend: '',
              legendOffset: 36,
            }}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            cellOpacity={1}
            cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
            defs={[
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7,
              },
            ]}
            fill={[{ id: 'lines' }]}
            colors={[
              'hsl(118, 74%, 64%)',
              'hsl(212, 74%, 64%)',
              'hsl(315, 70%, 50%)',
            ]}
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
