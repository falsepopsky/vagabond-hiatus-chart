import React from 'react';
import { CPAContainer } from './cpaSC';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { chaptersPerYearData } from './cpaData';
import {
  Title,
  TitleContainer,
  NivoContainer,
  LineContainer,
} from '../styled-components/globalUI';

const ChaptersTreeMap = () => {
  return (
    <CPAContainer>
      <LineContainer />
      <TitleContainer>
        <Title>CHAPTERS PER ARC</Title>
      </TitleContainer>
      <NivoContainer>
        <ResponsiveTreeMap
          data={chaptersPerYearData}
          identity="name"
          value="chapter"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
          parentLabelPadding={4}
          parentLabelTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          colors={{ scheme: 'pastel2' }}
          nodeOpacity={0.8}
          borderColor={{ from: 'color', modifiers: [['brighter', '1.8']] }}
          animate={false}
        />
        <p className="text-hidden">what do you want?</p>
      </NivoContainer>
    </CPAContainer>
  );
};

export default ChaptersTreeMap;
