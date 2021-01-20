import React from 'react';
import { StatsContent, StatsWrapper, TableBox, MusashiBox } from './statsSC';
import MusashiPic from '../../assets/musashi.jpeg';

const Stats = () => {
  return (
    <StatsContent>
      <StatsWrapper>
        <TableBox>
          <h2 className="title-stats">INFO</h2>

          <div className="table-box-content">
            <div className="table-box-row">
              <p className="table-main-title">CHAPTERS</p>
              <p className="table-main-data">323</p>
            </div>

            <div className="table-box-row">
              <p className="table-main-title">TANKŌBON</p>
              <p className="table-main-data">37</p>
            </div>

            <div className="table-box-row">
              <p className="table-main-title">LAST CHAPTER</p>
              <p className="table-main-data">MAY 15</p>
            </div>

            <div className="table-box-row">
              <p className="table-main-title">CURRENT STATUS</p>
              <p className="table-main-data">HIATUS</p>
            </div>
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
