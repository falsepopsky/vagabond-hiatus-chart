import { HeatmapDB } from '@db/index';
import ChartWrapper from '../apexchart';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { HeatSVG } from './svg';

const Heatmap = () => {
  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <HeatSVG />
        </IconContainer>
        <HeaderTwo>Chapters per year</HeaderTwo>
      </RowContainer>
      <ChartWrapper config={HeatmapDB} />
    </ColumnContainer>
  );
};

export default Heatmap;
