import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { HeatMapGrid } from 'react-grid-heatmap';
import Data from './hiatusData';

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
const yLabels = [
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
];

const xLabelStyle = {
  color: '#000000',
  fontSize: '.8rem',
};

const yLabelStyle = {
  fontSize: '.7rem',
  textTransform: 'uppercase',
  color: '#000000',
};

const HeatmapHiatus = () => {
  return (
    <>
      <Row as="section" className="text-center m-0">
        <Col>
          <Table responsive>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HeatMapGrid
                data={Data}
                xLabels={xLabels}
                yLabels={yLabels}
                cellRender={(x, y, value) => {
                  if (value === '*') {
                    const cellIssue = (
                      <div
                        title={`${value}`}
                        style={{ backgroundColor: 'hsl(30, 89%, 52%)' }}
                      >
                        {value}
                      </div>
                    );

                    return cellIssue;
                  } else if (value === 'x') {
                    const cellHiatus = (
                      <div
                        title={`${value}`}
                        style={{ backgroundColor: 'hsl(0, 86%, 61%)' }}
                      >
                        {value}
                      </div>
                    );

                    return cellHiatus;
                  } else {
                    const cellChapter = (
                      <div
                        title={`${value}`}
                        style={{ backgroundColor: 'hsl(204, 86%, 61%)' }}
                      >
                        {value}
                      </div>
                    );
                    return cellChapter;
                  }
                }}
                xLabelsStyle={() => xLabelStyle}
                yLabelsStyle={() => yLabelStyle}
                cellStyle={(_x, _y, ratio) => ({
                  background: 'white',
                  fontSize: '.6rem',
                  color: `rgb(0, 0, 0)`,
                })}
                cellHeight="1.3rem"
                xLabelsPos="bottom"
                yLabelsPos="left"
                square
              />
            </div>
          </Table>
          <p>Weeks</p>
        </Col>
      </Row>
    </>
  );
};

export default HeatmapHiatus;
