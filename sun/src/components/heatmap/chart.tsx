import { ArcDB, HeatmapDB } from '@db/index';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { RowContainer } from '../styled';
import { BorderBox, Button } from './styles';
import { DBSVG, ShareSVG } from './svg';

const ChartWrapper = dynamic(() => import('../apexchart'), { ssr: false });

const HChart = () => {
  const [showHiatus, SetShowHiatus] = useState(true);

  const handleToggle = () => {
    SetShowHiatus((prevshowHiatus) => !prevshowHiatus);
  };

  return (
    <>
      <RowContainer>
        <BorderBox>
          <DBSVG />
          <p>{showHiatus ? 'Hiatus' : 'Arc'}</p>
        </BorderBox>
        <BorderBox>
          <ShareSVG />
          <Button onClick={handleToggle}>Toggle database</Button>
        </BorderBox>
      </RowContainer>
      <ChartWrapper config={showHiatus ? HeatmapDB : ArcDB} />
    </>
  );
};

export default HChart;
