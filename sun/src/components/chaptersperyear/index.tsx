import { AreaDB } from '@/db/index';
import { ChartWrapper } from '../apexchart';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer, StyledText } from '../styled';
import { ChartSVG } from './svg';

const LineChart = () => {
  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <ChartSVG />
        </IconContainer>
        <HeaderTwo>Chapters per year</HeaderTwo>
      </RowContainer>
      <StyledText>
        In the following chart you can see the published and hiatus chapters by year. Toggle the options at the bottom
        of the chart for invidual visualization.
      </StyledText>
      <ChartWrapper config={AreaDB} />
    </ColumnContainer>
  );
};

export default LineChart;
