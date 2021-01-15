import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { testDatabase } from './ChaptersPerYearDatabase';
import { configCPY } from './cpyNivoConfig';
import { themeNivo } from '../theme/themeNivo';
import {
  CPYContainer,
  CPYLineContainer,
  TitleContainer,
  NivoLineContainer,
} from './cpySC';

const ChaptersLine = () => {
  return (
    <>
      <CPYContainer>
        <CPYLineContainer></CPYLineContainer>
        <TitleContainer>
          <h2 className="line-main-title">CHAPTERS PER YEAR</h2>
        </TitleContainer>
        <NivoLineContainer>
          <ResponsiveLine
            data={testDatabase}
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
            areaOpacity={0.9}
            enableSlices="x"
            enableCrosshair={true}
            crosshairType="top-left"
            legends={configCPY.legends}
            defs={configCPY.defs}
            fill={configCPY.fill}
          />
          <p className="line-hidden-render">slamn dunk</p>
        </NivoLineContainer>
      </CPYContainer>
    </>
  );
};

export default ChaptersLine;
