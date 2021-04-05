import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { cpyDatabase } from './ChaptersPerYearDatabase';
import { configCPY } from './cpyNivoConfig';
import { themeNivo } from '../theme/themeNivo';
import {
  Title,
  NivoContainer,
  TitleContainer,
  LineContainer,
  SectionContainer,
} from '../styled-components/globalUI';

const ChaptersLine = () => {
  return (
    <SectionContainer>
      <LineContainer borderColor="rgb(249, 160, 63)" />
      <TitleContainer>
        <Title>CHAPTERS PER YEAR</Title>
      </TitleContainer>
      <NivoContainer>
        <ResponsiveLine
          data={cpyDatabase}
          theme={themeNivo}
          colors={configCPY.colors}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={configCPY.yScale}
          axisTop={null}
          axisRight={null}
          axisBottom={configCPY.axisBottom}
          axisLeft={configCPY.axisLeft}
          enableGridX={false}
          pointSize={10}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={1}
          pointBorderColor="#ffffff"
          pointLabelYOffset={-12}
          enableArea={true}
          areaBlendMode="normal"
          areaOpacity={0.75}
          enableSlices="x"
          enableCrosshair={false}
          legends={configCPY.legends}
          defs={configCPY.defs}
          fill={configCPY.fill}
        />
        <p className="text-hidden">slam dunk</p>
      </NivoContainer>
    </SectionContainer>
  );
};

export default ChaptersLine;
