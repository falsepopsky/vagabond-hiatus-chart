import { TreemapDB } from '@db/index';
import ChartWrapper from '../apexchart';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { TreeSVG } from './svg';

const Treemap = () => {
  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <TreeSVG />
        </IconContainer>
        <HeaderTwo>Chapters per arc</HeaderTwo>
      </RowContainer>
      <ChartWrapper config={TreemapDB} />
    </ColumnContainer>
  );
};

export default Treemap;
