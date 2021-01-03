import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { ThemeCPA } from '../chapters-per-arc/theme';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import { configHeatmap } from './hiatusHeatmapConfig';
import Button from 'react-bootstrap/Button';

const keysHeatmap = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
];

let toolTipHeatmap = ({ color, xKey, yKey }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        height: '20px',
        width: '20px',
        marginRight: '4px',
        backgroundColor: color,
        borderRadius: '50%',
      }}
    ></div>
    <strong>
      Year {yKey} / #{xKey}
    </strong>
  </div>
);

const Heatmap = () => {
  const [database, setDatabase] = useState(publicationsDatabase);
  const [colors, setColors] = useState(configHeatmap.colorsPublications);

  const changeToPubs = function () {
    setDatabase(publicationsDatabase);
    setColors(configHeatmap.colorsPublications);
  };

  const changeToArc = function () {
    setDatabase(arcsDatabase);
    setColors(configHeatmap.colorsArcs);
  };

  return (
    <>
      <Row as="section" className="text-center m-0">
        <Col md={12}>
          <h2 className="mt-5">HIATUS THING</h2>
          <Button variant="primary" onClick={changeToPubs}>
            Change to Publications
          </Button>
          <Button variant="secondary" onClick={changeToArc}>
            Change to Arc Heatmap
          </Button>
        </Col>

        <Col md={12} className="p-0" style={{ width: '100%', height: '460px' }}>
          <ResponsiveHeatMapCanvas
            data={database}
            keys={keysHeatmap}
            indexBy="year"
            margin={configHeatmap.margin}
            theme={ThemeCPA}
            pixelRatio={1}
            minValue="auto"
            maxValue="auto"
            tooltip={toolTipHeatmap}
            forceSquare={false}
            sizeVariation={0.01}
            padding={1}
            colors={colors}
            axisTop={null}
            axisRight={null}
            axisBottom={configHeatmap.axisBottom}
            axisLeft={configHeatmap.axisLeft}
            enableGridX={false}
            enableGridY={true}
            cellShape="rect"
            cellOpacity={1}
            cellBorderWidth={0}
            cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
            enableLabels={false}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
            animate={false}
            isInteractive={true}
            hoverTarget="rowColumn"
            cellHoverOpacity={1}
            cellHoverOthersOpacity={0.5}
          />
          <p>&#32;</p>
        </Col>

        <Col md={12}>
          <p>explaning all this with legends</p>
        </Col>
      </Row>
    </>
  );
};

export default Heatmap;
