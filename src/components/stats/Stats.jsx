import React from 'react';
import { StatsContent, StatsWrapper, TableBox, MusashiBox } from './statsSC';
import MusashiPic from '../../assets/musashi.jpeg';

const Stats = () => {
  return (
    <StatsContent>
      <StatsWrapper>
        <TableBox>
          <h2 className="title-stats">STATS</h2>

          <div className="table-box-row">
            <p>CHAPTERS</p>
            <p>323</p>
          </div>

          <div className="table-box-row">
            <p>TANKŌBON</p>
            <p>37</p>
          </div>

          <div className="table-box-row">
            <p>LAST CHAPTER</p>
            <p>MAY 15</p>
          </div>

          <div className="table-box-row">
            <p>CURRENT STATUS</p>
            <p>HIATUS</p>
          </div>
        </TableBox>
        <MusashiBox>
          <img
            loading="lazy"
            className="musashi-picture"
            src={MusashiPic}
            alt="Miyamoto Musashi"
          />
        </MusashiBox>
      </StatsWrapper>
    </StatsContent>
  );
};

export default Stats;
