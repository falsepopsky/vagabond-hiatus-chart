import Line from './Line';
import { cpyDatabase } from './ChaptersPerYearDatabase';
import { configCPY } from './cpyNivoConfig';
import { themeNivo } from '../../themes/nivo';
import {
  Title,
  NivoContainer,
  LineContainer,
  SectionContainer,
} from '../styled-components/globalUI';

const ChaptersLine = () => {
  return (
    <SectionContainer pad={'1.5vh 5vw 5vh'}>
      <LineContainer borderColor="rgb(249, 160, 63)" />

      <Title>CHAPTERS PER YEAR</Title>

      <div style={{ width: '100%', height: '440px' }}>
        <div style={{ position: 'relative', width: '100%', height: '440px' }}>
          <NivoContainer>
            <Line
              config={configCPY}
              dataCPY={cpyDatabase}
              themeNivo={themeNivo}
            />
          </NivoContainer>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ChaptersLine;
