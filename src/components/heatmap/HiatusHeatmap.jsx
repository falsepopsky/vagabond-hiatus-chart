import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { themeNivo } from '../theme/themeNivo';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import { configHeatmap } from './hiatusHeatmapConfig';
import { HeatmapStyles, ButtonSC } from './hiatusHeatmapSC';
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
        <Row as="section" className="heatmap-section text-center">
          <Col md={12} className="heatmap-main">
            <h2 className="heatmap-main-title">HIATUS THING</h2>
          </Col>

          <Col md={12} className="heatmap-render">
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
            <p className="heatmap-render-text">
              invincible... it's merely a word.
            </p>
          </Col>

          <Col md={12} className="heatmap-database-legend">
            <ButtonSC onClick={changeToPubs}>CHAPTERS</ButtonSC>
            <ButtonSC arc onClick={changeToArc}>
              ARC
            </ButtonSC>
          </Col>

          <Col md={12} className="legend-section">
            <div className="legend-card-one">
              <img src={Legend} alt="Legends" className="legend-img" />
            </div>
            <div className="legend-card-two">
              <div className="item texto-blanco">
                <div className="cuadrado blanco"></div>Double Weekly Issue
              </div>
              <div className="item texto-verde">
                <div className="cuadrado verde"></div>New Chapter
              </div>
              <div className="item texto-rojo">
                <div className="cuadrado rojo"></div>Doesn’t appear in MW
              </div>
            </div>
          </Col>
        </Row>
      </HeatmapStyles>
    </>
  );
};

export default Heatmap;
