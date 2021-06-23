import styled from 'styled-components';
import { ArticleTwo, StyledP } from './hiatusHeatmapSC';

const ArcBox = styled.div`
  color: white;
  width: 200px;
  height: 32px;
  text-align: justify;

  @media (max-width: 576px) {
    width: 180px;
    font-size: small;
  }
`;

const HiatusLegendArc = () => {
  return (
    <ArticleTwo>
      <ArcBox>
        <StyledP backgroundColor={'#bce784'}>Takezō</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#fff875'}>First Yoshioka</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#28666e'}>Hōzōin</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#06ba63'}>Yagyū</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#508991'}>Baiken</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#7d80da'}>Kojirō</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#ffe156'}>Second Yoshioka</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#a42cd6'}>Ichijōji's aftermath</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#3777ff'}>Wandering</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#4059ad'}>Farming</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#ff6663'}>Hosokawa</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#e3bfc9'}>Hiatus Arc</StyledP>
      </ArcBox>
      <ArcBox>
        <StyledP backgroundColor={'#f4f7f3'}>Double Weekly</StyledP>
      </ArcBox>
    </ArticleTwo>
  );
};

export default HiatusLegendArc;
