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

      <div style={{ width: '100%', height: '440px' }}>
        <div style={{ position: 'relative', width: '100%', height: '440px' }}>
          <NivoContainer>
            <Treemap dataCPA={chaptersPerYearData} nivoTheme={themeNivo} />
          </NivoContainer>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ChaptersTreeMap;
