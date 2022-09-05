import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
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
    </ColumnContainer>
  );
};

export default Heatmap;
