import { TreemapDB } from '@db/index';
import dynamic from 'next/dynamic';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { TreeSVG } from './svg';

const ChartWrapper = dynamic(() => import('../apexchart'), { ssr: false });

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
