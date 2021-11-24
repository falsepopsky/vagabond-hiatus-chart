import { chaptersPerYearData } from './cpaData';
import {
  Title,
  NivoContainer,
  LineContainer,
  SectionContainer,
} from '../styled-components/globalUI';
import Treemap from './Treemap';
import { themeNivo } from '../../themes/nivo';

const ChaptersTreeMap = () => {
  return (
    <SectionContainer pad={'1.5vh 5vw 5vh'}>
      <LineContainer />

      <Title>CHAPTERS PER ARC</Title>

      <NivoContainer>
        <NivoContainer absolute>
          <Treemap dataCPA={chaptersPerYearData} nivoTheme={themeNivo} />
        </NivoContainer>
      </NivoContainer>
    </SectionContainer>
  );
};

export default ChaptersTreeMap;
