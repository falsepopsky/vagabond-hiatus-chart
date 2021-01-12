import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { themeNivo } from '../theme/themeNivo';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import { configHeatmap } from './hiatusHeatmapConfig';
import { HeatmapStyles, HeatmapBox, ButtonSC, Emoji } from './hiatusHeatmapSC';
import Legend from '../../assets/legend.svg';
import HiatusLegendArc from './HiatusLegendArc';
import HiatusLegendChapter from './HiatusLegendChapter';

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
  const [cardTwo, setCardTwo] = useState(true);

  const changeToPubs = function () {
    setDatabase(publicationsDatabase);
    setColors(configHeatmap.colorsPublications);
    setCardTwo(true);
  };

  const changeToArc = function () {
    setDatabase(arcsDatabase);
    setColors(configHeatmap.colorsArcs);
    setCardTwo(false);
  };

  return (
    <>
      <HeatmapStyles>
        <Row as="section" className="heatmap-section text-center">
          <Col md={12} className="heatmap-main">
            <h2 className="heatmap-main-title">VAGABOND HIATUS HEATMAP</h2>
          </Col>
          <HeatmapBox>
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
          </HeatmapBox>

          <Col md={12} className="heatmap-database-legend">
            <div className="heatmap-title">
              <div className="heatmap-title-box">
                <h2 className="title-database-legend">CHANGE DATABASE</h2>
              </div>
            </div>

            <div className="heatmap-buttons">
              <ButtonSC onClick={changeToPubs}>
                <Emoji />
                CHAPTERS
              </ButtonSC>
              <ButtonSC onClick={changeToArc}>
                <Emoji fuji />
                ARC
              </ButtonSC>
            </div>

            <div className="heatmap-title">
              <div className="heatmap-title-box">
                <h2 className="title-database-legend">LEGEND</h2>
              </div>
            </div>
          </Col>

          <Col md={12} className="legend-card">
            <article className="legend-card-one">
              <img src={Legend} alt="Legends" className="legend-card-one-img" />
            </article>

            {cardTwo === true ? (
              <>
                <HiatusLegendChapter />
              </>
            ) : (
              <>
                <HiatusLegendArc />
              </>
            )}
          </Col>
        </Row>
      </HeatmapStyles>
    </>
  );
};

export default Heatmap;
