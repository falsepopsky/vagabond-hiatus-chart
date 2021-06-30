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

const HiatusLegendArc = () => {
  return (
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
};

export default HiatusLegendArc;
