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
      <LineContainer borderColor='rgb(249, 160, 63)' />

      <Title>CHAPTERS PER YEAR</Title>

      <NivoContainer>
        <NivoContainer absolute>
          <Line config={configCPY} dataCPY={cpyDatabase} themeNivo={themeNivo} />
        </NivoContainer>
      </NivoContainer>
    </SectionContainer>
  );
};

export default ChaptersLine;
