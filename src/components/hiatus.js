import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HeatMapGrid } from 'react-grid-heatmap';
import Data from '../data/test';

const xLabels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
];
const yLabels = ['1998', '1999'];

const App = () => {
  return (
    <>
      <Row className="text-center">
        <Col style={{ width: '100%' }}>
          <HeatMapGrid
            data={Data}
            xLabels={xLabels}
            yLabels={yLabels}
            cellRender={(x, y, value) => (
              <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
            )}
            xLabelsStyle={() => ({
              color: '#000000',
              fontSize: '.8rem',
            })}
            yLabelsStyle={() => ({
              fontSize: '.7rem',
              textTransform: 'uppercase',
              color: '#000000',
            })}
            cellStyle={(_x, _y, ratio) => ({
              background: ratio === 16 ? 'green' : 'red',
              fontSize: '.8rem',
              color: `rgb(0, 0, 0)`,
            })}
            cellHeight="1.5rem"
            xLabelsPos="bottom"
            yLabelsPos="left"
            square
          />
          <p>Weeks</p>
        </Col>
      </Row>
    </>
  );
};

export default App;
