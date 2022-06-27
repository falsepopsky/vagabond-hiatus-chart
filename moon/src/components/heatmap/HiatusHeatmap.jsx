import { useState } from 'react';
import { publicationsDatabase, arcsDatabase } from './hiatusHeatmapDatabase';
import Heatmap from './Heatmap';
import { configHeatmap } from './hiatusHeatmapConfig';
import {
  HeatNav,
  Navigation,
  SmallContainer,
  TitleNav,
  ButtonSC,
  TextButton,
  LegendTitle,
  LegendsContainer,
} from './hiatusHeatmapSC';
import { Katana, Monte, Shuffle, DatabaseSVG, Legend } from './../svg/Svgs';
import HiatusLegendArc from './HiatusLegendArc';
import HiatusLegendChapter from './HiatusLegendChapter';
import {
  SectionContainer,
  Title,
  NivoContainer,
  LineContainer,
} from '../styled-components/globalUI';

const HiatusHeatmap = () => {
  const [db, setDb] = useState(publicationsDatabase);
  const [colors, setColors] = useState(configHeatmap.colorsPublications);
  const [cardTwo, setCardTwo] = useState(true);

  const changeToPubs = () => {
    setDb(publicationsDatabase);
    setColors(configHeatmap.colorsPublications);
    setCardTwo(true);
  };

  const changeToArc = () => {
    setDb(arcsDatabase);
    setColors(configHeatmap.colorsArcs);
    setCardTwo(false);
  };

  return (
    <SectionContainer>
      <LineContainer borderColor="rgb(249, 63, 63)" />

      <Title>HIATUS HEATMAP</Title>

      <HeatNav>
        <Navigation>
          <SmallContainer>
            <DatabaseSVG />
            <TitleNav>CHANGE DATABASE</TitleNav>
          </SmallContainer>

          <SmallContainer shuffle>
            <Shuffle />
          </SmallContainer>

          <SmallContainer>
            <ButtonSC onClick={changeToPubs}>
              <Katana />
              <TextButton>CHAPTERS</TextButton>
            </ButtonSC>
            <ButtonSC onClick={changeToArc}>
              <Monte />
              <TextButton>ARCS</TextButton>
            </ButtonSC>
          </SmallContainer>
        </Navigation>
      </HeatNav>

      <NivoContainer>
        <NivoContainer absolute>
          <Heatmap
            database={db}
            colors={colors}
            configHeatmap={configHeatmap}
          />
        </NivoContainer>
      </NivoContainer>

      <LegendTitle>LEGEND</LegendTitle>

      <LegendsContainer>
        <div className="legend-card-one">
          <Legend />
        </div>

        {!cardTwo ? <HiatusLegendArc /> : <HiatusLegendChapter />}
      </LegendsContainer>
    </SectionContainer>
  );
};

export default HiatusHeatmap;