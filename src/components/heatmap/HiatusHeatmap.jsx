import React, { useState } from 'react';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import Heatmap from './Heatmap';
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
  NivoContainer,
  LineContainer,
} from '../styled-components/globalUI';

const HiatusHeatmap = () => {
  const [database, setDatabase] = useState(publicationsDatabase);
  const [colors, setColors] = useState(configHeatmap.colorsPublications);
  const [cardTwo, setCardTwo] = useState(true);

  const changeToPubs = () => {
    setDatabase(publicationsDatabase);
    setColors(configHeatmap.colorsPublications);
    setCardTwo(true);
  };

  const changeToArc = () => {
    setDatabase(arcsDatabase);
    setColors(configHeatmap.colorsArcs);
    setCardTwo(false);
  };

  return (
    <HeatmapContainer>
      <LineContainer borderColor="rgb(249, 63, 63)" />

      <Title>HIATUS HEATMAP</Title>

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
      <div style={{ position: 'relative' }}>
        <NivoContainer>
          <Heatmap
            database={database}
            colors={colors}
            configHeatmap={configHeatmap}
          />
        </NivoContainer>
      </div>
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

export default HiatusHeatmap;
