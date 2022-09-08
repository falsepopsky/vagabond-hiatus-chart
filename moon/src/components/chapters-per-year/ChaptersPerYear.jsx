import { LineContainer, NivoContainer, SectionContainer, Title } from '../styled/globalUI';
import { cpyDatabase } from './db';
import { Line } from './Line';

const ChaptersLine = () => {
  return (
    <SectionContainer pad={'1.5vh 5vw 5vh'}>
      <LineContainer borderColor='rgb(249, 160, 63)' />

      <Title>CHAPTERS PER YEAR</Title>

      <NivoContainer>
        <NivoContainer absolute>
          <Line dataCPY={cpyDatabase} />
        </NivoContainer>
      </NivoContainer>
    </SectionContainer>
  );
};

export default ChaptersLine;
