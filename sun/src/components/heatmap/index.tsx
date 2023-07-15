import dynamic from 'next/dynamic';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { HeatSVG } from './svg';

export const ChartWrapper = dynamic(() => import('./chart'), { ssr: false });

const Heatmap = () => {
  return (
    <ColumnContainer $isHomeSection>
      <RowContainer>
        <IconContainer>
          <HeatSVG />
        </IconContainer>
        <HeaderTwo>Hiatus Heatmap</HeaderTwo>
      </RowContainer>
      <ChartWrapper />
    </ColumnContainer>
  );
};

export default Heatmap;
