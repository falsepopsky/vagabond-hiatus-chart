import React from 'react';
import {
  CPAContainer,
  CPALineContainer,
  TitleContainer,
  NivoTreeMapContainer,
} from './cpaSC';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { chaptersPerYearData } from './cpaData';

const ChaptersTreeMap = () => {
  return (
    <CPAContainer>
      <CPALineContainer></CPALineContainer>
      <TitleContainer>
        <h2 className="cpa-main-title">CHAPTERS PER ARC</h2>
      </TitleContainer>
      <NivoTreeMapContainer>
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
        <p className="secret-line">what do you want?</p>
      </NivoTreeMapContainer>
    </CPAContainer>
  );
};

export default ChaptersTreeMap;
