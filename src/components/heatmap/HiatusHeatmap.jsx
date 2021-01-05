import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { themeNivo } from '../theme/themeNivo';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import { configHeatmap } from './hiatusHeatmapConfig';
import { HeatmapStyles } from './hiatusHeatmapSC';
import Legend from '../../assets/legend.svg';

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
      <HeatmapStyles>
        <Row as="section" className="text-center m-0">
          <Col md={12} className="p-0">
            <h2 className="mt-5">HIATUS THING</h2>
            <Button className="ligma" onClick={changeToPubs}>
              RESUME
            </Button>
            <Button className="arc" onClick={changeToArc}>
              Arc
            </Button>
          </Col>

          <Col md={12} className="heatmap-section">
            <ResponsiveHeatMapCanvas
              data={database}
              keys={configHeatmap.keysHeatmap}
              indexBy="year"
              margin={configHeatmap.margin}
              theme={themeNivo}
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
              cellBorderColor="#000"
              enableLabels={false}
              animate={false}
              isInteractive={true}
              hoverTarget="rowColumn"
              cellHoverOpacity={1}
              cellHoverOthersOpacity={0.5}
            />
            <p>&#32;</p>
          </Col>

          <Col md={12} className="legend-section">
            <div className="legend-card-one">
              <img src={Legend} alt="Legends" className="legend-img" />
            </div>
            <div className="legend-card-two">
              <p>$ 6451.50</p>
              <p>Balance</p>
            </div>
          </Col>
        </Row>
      </HeatmapStyles>
    </>
  );
};

export default Heatmap;
