import { ArcDB, HeatmapDB } from '@db/index';
import { HeatMapCanvas } from '@nivo/heatmap';
import { useState } from 'react';
import { RowContainer } from '../styled';
import { BorderBox, Button, ListStyled, OlStyled } from './styles';
import { DBSVG, ShareSVG } from './svg';

type DatumProps = {
  value: number | null;
};

const colors = [
  '#fd514e',
  '#f4f7f3',
  '#70DDC6',
  '#fff875',
  '#06ba63',
  '#3777ff',
  '#7d80da',
  '#95e784',
  '#ffe156',
  '#c94bff',
  '#4059ad',
  '#03c887',
  '#2426a5',
];

const legends = [
  'Hiatus',
  'Double weekly issue',
  'Published',
  'Takezō',
  'First Yoshioka',
  'Hōzōin',
  'Yagyū',
  'Baiken',
  'Kojirō',
  'Second Yoshioka',
  "Ichijōji's aftermath",
  'Wandering',
  'Farming',
  'Hosokawa',
];

const filtered = legends.filter(function (letter) {
  return letter !== 'Published';
});

function createObj(a?: boolean): { name: string; color: string }[] {
  const newObj = [];

  if (a) {
    for (let start = 0; start < 3; start++) {
      newObj.push({ name: legends[start], color: colors[start] });
    }
    return newObj;
  }
  for (let start = 0; start < colors.length; start++) {
    newObj.push({ name: filtered[start], color: colors[start] });
  }
  return newObj;
}

function OrderedList({ a }: { a: boolean }) {
  const Legends = a ? createObj(a) : createObj();

  return (
    <OlStyled>
      {Legends.map((legend, index) => {
        return (
          <ListStyled col={legend.color} key={index}>
            {legend.name}
          </ListStyled>
        );
      })}
    </OlStyled>
  );
}

const HChart = () => {
  const [showHiatus, SetShowHiatus] = useState(true);

  const handleToggle = () => {
    SetShowHiatus((prevshowHiatus) => !prevshowHiatus);
  };

  function select(datum: DatumProps): string {
    if (typeof datum.value === 'number') {
      return colors[datum.value];
    }

    return '#00ffff0';
  }

  return (
    <>
      <RowContainer>
        <BorderBox>
          <DBSVG />
          <p>{showHiatus ? 'Hiatus' : 'Arc'}</p>
        </BorderBox>
        <BorderBox>
          <ShareSVG />
          <Button onClick={handleToggle} aria-pressed={showHiatus}>
            Toggle database
          </Button>
        </BorderBox>
      </RowContainer>
      <div
        style={{
          width: '100%',
          height: 'auto',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}>
        <HeatMapCanvas
          width={1280}
          height={460}
          data={showHiatus ? HeatmapDB : ArcDB}
          theme={{
            textColor: '#f8f8f8',
            fontSize: 9,
          }}
          margin={{ top: 0, right: 0, bottom: 40, left: 50 }}
          axisBottom={{
            tickSize: 2,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Weekly Issue',
            legendPosition: 'middle',
            legendOffset: 30,
          }}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 2,
            tickPadding: 4,
            tickRotation: 0,
            legend: 'Year',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          colors={select}
          emptyColor='#00ffff0'
          borderWidth={1}
          borderColor='#000000'
          enableLabels={false}
          legends={[]}
          annotations={[]}
          isInteractive={false}
        />
      </div>
      <OrderedList a={showHiatus} />
    </>
  );
};

export default HChart;
