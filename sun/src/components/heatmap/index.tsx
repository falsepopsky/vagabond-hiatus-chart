import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import HeatmapChart from './chart';
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
      <HeatmapChart />
    </ColumnContainer>
  );
};

export default Heatmap;
