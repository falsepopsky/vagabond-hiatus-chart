import { ArcDB, HeatmapDB } from '@db/index';
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import { useState } from 'react';
import { RowContainer } from '../styled';
import { BorderBox, Button } from './styles';
import { DBSVG, ShareSVG } from './svg';

const HChart = () => {
  const [showHiatus, SetShowHiatus] = useState(true);

  const handleToggle = () => {
    SetShowHiatus((prevshowHiatus) => !prevshowHiatus);
  };

  const select = (datum) => {
    const colors = [
      '#fd514e',
      '#f4f7f3',
      '#70DDC6',
      '#fff875',
      '#06ba63',
      '#3777ff',
      '#7d80da',
      '#95e784',
      '#ffe156',
      '#c94bff',
      '#4059ad',
      '#03c887',
      '#2426a5',
    ];

    return colors[datum.value];
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
      <div style={{ width: '100%', height: '460px' }}>
        <ResponsiveHeatMapCanvas
          data={showHiatus ? HeatmapDB : ArcDB}
          theme={{
            textColor: '#f8f8f8',
            fontSize: 9,
          }}
          margin={{ top: 0, right: 0, bottom: 70, left: 50 }}
          valueFormat='>-.2s'
          axisBottom={{
            tickSize: 2,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Weekly Issue',
            legendPosition: 'middle',
            legendOffset: 36,
          }}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 2,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Year',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          colors={select}
          emptyColor='#00ffff0'
          borderWidth={1}
          borderColor='#000000'
          enableLabels={false}
          legends={[]}
          annotations={[]}
          isInteractive={false}
        />
      </div>
    </>
  );
};

export default HChart;
