import Image from 'next/image';
import { ColumnContainer, HeaderTwo, IconContainer, RowContainer } from '../styled';
import { BoxBorder, TextInfo, WrapInfo } from './styles';
import { Info } from './svg';

const Information = () => {
  return (
    <ColumnContainer isHomeSection>
      <RowContainer>
        <IconContainer>
          <Info />
        </IconContainer>
        <HeaderTwo>Information</HeaderTwo>
      </RowContainer>
      <WrapInfo>
        <div style={{ flexBasis: '400px', gap: '1em 0', display: 'flex', flexFlow: 'column nowrap' }}>
          <TextInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, illo deleniti facilis optio neque quam minima
            unde aperiam, eos minus ea quae odit nam quas? Distinctio consequuntur necessitatibus explicabo aliquid.
          </TextInfo>

          <BoxBorder>
            <TextInfo>Chapters</TextInfo> <TextInfo>323</TextInfo>
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
        </div>

        <div>
          <Image src='/musashi.jpeg' alt='Musashi' width={360} height={514} />
        </div>
      </WrapInfo>
    </ColumnContainer>
  );
};

export default Information;
