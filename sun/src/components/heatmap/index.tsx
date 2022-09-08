import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import Chart from './chart';
import { HeatSVG } from './svg';

const Heatmap = () => {
  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <HeatSVG />
        </IconContainer>
        <HeaderTwo>Hiatus Heatmap</HeaderTwo>
      </RowContainer>
      <Chart />
    </ColumnContainer>
  );
};

export default Heatmap;
