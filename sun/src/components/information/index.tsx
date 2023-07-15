import Image from 'next/image';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { BoxBorder, BoxInfo, TextInfo, WrapInfo } from './styles';
import { Info } from './svg';

const Information = () => {
  return (
    <ColumnContainer $isHomeSection>
      <RowContainer>
        <IconContainer>
          <Info />
        </IconContainer>
        <HeaderTwo>Information</HeaderTwo>
      </RowContainer>
      <WrapInfo>
        <BoxInfo>
          <TextInfo>
            Vagabond &#40;バガボンド&#41; is a Japanese epic martial arts manga series written and illustrated by
            Takehiko Inoue. It portrays a fictionalized account of the life of Japanese swordsman Musashi Miyamoto,
            based on Eiji Yoshikawa&apos;s novel Musashi. It has been serialized in Kodansha&apos;s seinen manga
            magazine Morning since September 1998, with its chapters collected into thirty-seven tankōbon volumes as of
            July 2014. &#40;wikipedia&#41;
          </TextInfo>
          <BoxBorder>
            <TextInfo>Chapters</TextInfo> <TextInfo>327</TextInfo>
          </BoxBorder>
          <BoxBorder>
            <TextInfo>Tankobōn</TextInfo> <TextInfo>37</TextInfo>
          </BoxBorder>
          <BoxBorder>
            <TextInfo>Last chapter released</TextInfo> <TextInfo>May 15</TextInfo>
          </BoxBorder>
          <BoxBorder>
            <TextInfo>Current status</TextInfo> <TextInfo>Hiatus</TextInfo>
          </BoxBorder>
        </BoxInfo>

        <div className={'musashi'}>
          <Image src='/musashi.jpeg' alt='Musashi' width={360} height={514} />
        </div>
      </WrapInfo>
    </ColumnContainer>
  );
};

export default Information;
