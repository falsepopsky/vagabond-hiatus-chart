import { AreaDB } from '@db/index';
import ChartWrapper from '../apexchart';
import { ColumnContainer, Description, HeaderTwo, IconContainer, RowContainer } from '../styled';
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
      <Description>
        In this section you can see the published chapters released by year also how many where missing because of the
        hiatus. Remember you can toggle the options from the bottom of the chart.
      </Description>
      <ChartWrapper config={AreaDB} />
    </ColumnContainer>
  );
};

export default LineChart;
