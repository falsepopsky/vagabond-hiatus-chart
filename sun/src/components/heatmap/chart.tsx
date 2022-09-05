import { ArcDB, HeatmapDB } from '@db/index';
import { useState } from 'react';
import ChartWrapper from '../apexchart';
import { DBSVG } from './svg';

const HChart = () => {
  const [HEATDB, SetHetmapDB] = useState(HeatmapDB);

  const toggleDB = () => {
    SetHetmapDB(ArcDB);
  };

  return (
    <div style={{ padding: '0 2vw' }}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          gap: '2em',
          alignItems: 'center',
          borderBottom: '1px solid green',
        }}>
        <DBSVG />
        <p style={{ margin: '0', padding: '0' }}>Toggle</p>
        <button onClick={toggleDB}>Toggle DB</button>
      </div>
      <div>
        <ChartWrapper config={HEATDB} />
      </div>
    </div>
  );
};

export default HChart;
