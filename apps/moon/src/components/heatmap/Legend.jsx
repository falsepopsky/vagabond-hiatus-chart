import styled from 'styled-components';
import { ArticleTwo, StyledP } from './styles';

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

const Arcs = [
  {
    color: '#bce784',
    arcName: 'Takezō',
  },
  {
    color: '#fff875',
    arcName: 'First Yoshioka',
  },
  {
    color: '#28666e',
    arcName: 'Hōzōin',
  },
  {
    color: '#06ba63',
    arcName: 'Yagyū',
  },
  {
    color: '#508991',
    arcName: 'Baiken',
  },
  {
    color: '#7d80da',
    arcName: 'Kojirō',
  },
  {
    color: '#ffe156',
    arcName: 'Second Yoshioka',
  },
  {
    color: '#a42cd6',
    arcName: "Ichijōji's aftermath",
  },
  {
    color: '#3777ff',
    arcName: 'Wandering',
  },
  {
    color: '#4059ad',
    arcName: 'Farming',
  },
  {
    color: '#ff6663',
    arcName: 'Hosokawa',
  },
  {
    color: '#e3bfc9',
    arcName: 'Hiatus Arc',
  },
  {
    color: '#f4f7f3',
    arcName: 'Double Weekly',
  },
];

const HiatusLegendArc = () => (
  <ArticleTwo>
    {Arcs.map((arc) => {
      return (
        <ArcBox key={arc.arcName}>
          <StyledP backgroundColor={arc.color}>{arc.arcName}</StyledP>
        </ArcBox>
      );
    })}
  </ArticleTwo>
);

const HiatusLegendChapter = () => (
  <ArticleTwo flow={'column nowrap'} two={'space-evenly'}>
    <div>
      <StyledP color={'#f4f7f3'} backgroundColor={'#f4f7f3'}>
        Double Weekly Issue
      </StyledP>
    </div>
    <div>
      <StyledP color={'#70ddc6'} backgroundColor={'#70ddc6'}>
        New Chapter
      </StyledP>
    </div>
    <div>
      <StyledP color={'#f95d5a'} backgroundColor={'#f95d5a'}>
        Doesn't appear in Morning Issue
      </StyledP>
    </div>
  </ArticleTwo>
);

export { HiatusLegendArc, HiatusLegendChapter };
