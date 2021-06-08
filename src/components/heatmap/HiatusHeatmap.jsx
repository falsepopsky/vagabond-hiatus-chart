import React, { useState } from 'react';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { themeNivo } from '../theme/themeNivo';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import { configHeatmap } from './hiatusHeatmapConfig';
import {
  HeatmapContainer,
  HeatmapBar,
  ButtonSC,
  TextButton,
} from './hiatusHeatmapSC';
import { Katana, Monte, Shuffle, DatabaseSVG, Legend } from './../svg/Svgs';
import HiatusLegendArc from './HiatusLegendArc';
import HiatusLegendChapter from './HiatusLegendChapter';
import {
  Title,
  TitleContainer,
  NivoContainer,
  LineContainer,
} from '../styled-components/globalUI';

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
      <LineContainer borderColor="rgb(249, 63, 63)" />
      <TitleContainer>
        <Title>HIATUS HEATMAP</Title>
      </TitleContainer>

      <HeatmapBar>
        <div className="navigation-heatmap">
          <article className="database-section">
            <DatabaseSVG />
            <h2 className="database-title">CHANGE DATABASE</h2>
          </article>

          <article className="shuffle-section">
            <Shuffle />
          </article>

          <article className="buttons-section">
            <ButtonSC onClick={changeToPubs}>
              <Katana />
              <TextButton>CHAPTERS</TextButton>
            </ButtonSC>
            <ButtonSC onClick={changeToArc}>
              <Monte />
              <TextButton>ARCS</TextButton>
            </ButtonSC>
          </article>
        </div>
      </HeatmapBar>
      <NivoContainer>
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
        <p className="text-hidden">invincible... it's merely a word.</p>
      </NivoContainer>
      <div className="heatmap-database-legend">
        <div className="heatmap-title">
          <h2 className="title-database-legend">LEGEND</h2>
        </div>
      </div>

      <div className="legend-card">
        <article className="legend-card-one">
          <Legend />
        </article>

        {cardTwo === true ? <HiatusLegendChapter /> : <HiatusLegendArc />}
      </div>
    </HeatmapContainer>
  );
};

export default Heatmap;
