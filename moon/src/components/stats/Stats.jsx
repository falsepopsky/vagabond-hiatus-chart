import { StatsWrapper, TableBox, MusashiBox, TextTable } from './statsSC';
import MusashiPic from '../../assets/musashi.jpeg';

const Stats = () => {
  return (
    <StatsWrapper>
      <TableBox>
        <h2 className="title-stats">INFO</h2>

        <div className="table-box-content">
          <div className="table-box-row">
            <TextTable>CHAPTERS</TextTable>
            <TextTable primary>327</TextTable>
          </div>

          <div className="table-box-row">
            <TextTable>TANKŌBON</TextTable>
            <TextTable primary>37</TextTable>
          </div>

          <div className="table-box-row">
            <TextTable>LAST CHAPTER</TextTable>
            <TextTable primary>MAY 15</TextTable>
          </div>

          <div className="table-box-row">
            <TextTable>CURRENT STATUS</TextTable>
            <TextTable primary>HIATUS</TextTable>
          </div>
        </div>
      </TableBox>
      <MusashiBox>
        <img
          loading="lazy"
          className="musashi-picture"
          src={MusashiPic}
          alt="Miyamoto Musashi"
          width={360}
          height={514}
        />
      </MusashiBox>
    </StatsWrapper>
  );
};

export default Stats;
