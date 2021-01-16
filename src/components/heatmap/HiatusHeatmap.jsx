import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { themeNivo } from '../theme/themeNivo';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import { configHeatmap } from './hiatusHeatmapConfig';
import {
  HeatmapContainer,
  HeatmapBox,
  HeatmapBar,
  ButtonSC,
  Emoji,
} from './hiatusHeatmapSC';
import Legend from '../../assets/legend.svg';
import Database from '../../assets/database.svg';
import Change from '../../assets/shuffle.svg';
import HiatusLegendArc from './HiatusLegendArc';
import HiatusLegendChapter from './HiatusLegendChapter';

let toolTipHeatmap = ({ color, xKey, yKey }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <div
      style={{
        height: '20px',
        width: '20px',
        marginRight: '4px',
        backgroundColor: color,
        borderRadius: '50%',
      }}></div>
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
    <HeatmapContainer>
      <Col md={12} className="heatmap-main">
        <h2 className="heatmap-main-title">HIATUS HEATMAP</h2>
      </Col>

      <HeatmapBar>
        <div className="navigation-heatmap">
          <article className="database-section">
            <img
              className="database-img"
              src={Database}
              alt="database-svgrepo"
            />
            <h2 className="database-title">CHANGE DATABASE</h2>
          </article>

          <article className="shuffle-section">
            <img
              className="shuffle-change"
              src={Change}
              alt="shuffle-svgrepo"
            />
          </article>

          <article className="buttons-section">
            <ButtonSC onClick={changeToPubs}>
              <Emoji />
              <span className="button-chapter">CHAPTERS</span>
            </ButtonSC>
            <ButtonSC onClick={changeToArc}>
              <Emoji fuji />
              <span className="button-arc">ARC</span>
            </ButtonSC>
          </article>
        </div>
      </HeatmapBar>

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
        <p className="heatmap-render-text">invincible... it's merely a word.</p>
      </HeatmapBox>

      <Col md={12} className="heatmap-database-legend">
        <div className="heatmap-title">
          <h2 className="title-database-legend">LEGEND</h2>
        </div>
      </Col>

      <Col md={12} className="legend-card">
        <article className="legend-card-one">
          <img
            loading="lazy"
            src={Legend}
            alt="Legends"
            className="legend-card-one-img"
          />
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
    </HeatmapContainer>
  );
};

export default Heatmap;
