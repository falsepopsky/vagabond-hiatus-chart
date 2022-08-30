import { HeaderHero, SectionHero, SpanHero, MiniBox, StyledH1, HeroP } from './hero-styled';
import { VagabondLogo, GreenBlob, RedBlob, WhiteBlob } from './../svg/Svgs';

const HeroSection = () => {
  return (
    <>
      <HeaderHero>
        <SectionHero logo>
          <VagabondLogo />
          <HeroP story={'first'}>
            Takehiko Inoue <SpanHero>&#40;井上 雄彦&#41;</SpanHero>
          </HeroP>
        </SectionHero>
        <SectionHero>
          <MiniBox>
            <StyledH1>
              <HeroP>VAGABOND</HeroP>
              <HeroP>HIATUS</HeroP>
              <HeroP>CHART</HeroP>
            </StyledH1>
            <HeroP story={'second'}>
              A simple way to visualize the actual state of Vagabond with charts.
            </HeroP>
          </MiniBox>
          <MiniBox blob>
            <div className='box redbox'>
              <RedBlob />
            </div>
            <div className='box whitebox'>
              <WhiteBlob />
            </div>
            <div className='box greenbox'>
              <GreenBlob />
            </div>
          </MiniBox>
        </SectionHero>
      </HeaderHero>
    </>
  );
};

export default HeroSection;
