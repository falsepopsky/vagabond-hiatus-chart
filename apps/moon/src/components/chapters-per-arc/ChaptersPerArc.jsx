import { LineContainer, NivoContainer, SectionContainer, Title } from '../styled/globalUI';
import { chaptersPerArc } from './db';
import Treemap from './Treemap';

const ChaptersTreeMap = () => {
  return (
    <SectionContainer pad={'1.5vh 5vw 5vh'}>
      <LineContainer />

      <Title>CHAPTERS PER ARC</Title>

      <NivoContainer>
        <NivoContainer absolute>
          <Treemap dataCPA={chaptersPerArc} />
        </NivoContainer>
      </NivoContainer>
    </SectionContainer>
  );
};

export default ChaptersTreeMap;
