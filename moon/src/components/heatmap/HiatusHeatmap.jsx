import { useState } from 'react';
import { LineContainer, NivoContainer, SectionContainer, Title } from '../styled/globalUI';
import { DatabaseSVG, Katana, Legend, Monte, Shuffle } from './../svg/Svgs';
import { arcsDatabase, publicationsDatabase } from './db';
import Heatmap from './Heatmap';
import { configHeatmap } from './hiatusHeatmapConfig';
import { HiatusLegendArc, HiatusLegendChapter } from './Legend';
import {
  ButtonSC,
  HeatNav,
  LegendsContainer,
  LegendTitle,
  Navigation,
  SmallContainer,
  TextButton,
  TitleNav,
} from './styles';

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
      <LineContainer borderColor='rgb(249, 63, 63)' />

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
            <ButtonSC disabled={cardTwo} onClick={changeToPubs}>
              <Katana />
              <TextButton>CHAPTERS</TextButton>
            </ButtonSC>
            <ButtonSC disabled={!cardTwo} onClick={changeToArc}>
              <Monte />
              <TextButton>ARCS</TextButton>
            </ButtonSC>
          </SmallContainer>
        </Navigation>
      </HeatNav>

      <NivoContainer>
        <NivoContainer absolute>
          <Heatmap database={db} colors={colors} configHeatmap={configHeatmap} />
        </NivoContainer>
      </NivoContainer>

      <LegendTitle>LEGEND</LegendTitle>

      <LegendsContainer>
        <div className='legend-card-one'>
          <Legend />
        </div>

        {!cardTwo ? <HiatusLegendArc /> : <HiatusLegendChapter />}
      </LegendsContainer>
    </SectionContainer>
  );
};

export default HiatusHeatmap;
