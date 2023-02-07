import { Container, ExtendedC, HeaderOne, HeroP, SectionHero, SpanHero, SVGBox, SVGContainer } from './styles';
import { GreenBlob, RedBlob, VagabondLogo, WhiteBlob } from './svg';

const Hero = () => {
  return (
    <ExtendedC>
      <Container>
        <VagabondLogo />
        <HeroP story={'first'}>
          Takehiko Inoue <SpanHero lang='ja'>&#40;井上 雄彦&#41;</SpanHero>
        </HeroP>
        <SectionHero>
          <div>
            <HeaderOne>
              <HeroP>VAGABOND</HeroP>
              <HeroP>HIATUS</HeroP>
              <HeroP>CHART</HeroP>
            </HeaderOne>
            <HeroP story={'second'}>A simple way to visualize the actual state of Vagabond with charts.</HeroP>
          </div>
          <SVGContainer>
            <SVGBox top='-6%' left='25%'>
              <RedBlob />
            </SVGBox>
            <SVGBox top='18%' left='-19%'>
              <WhiteBlob />
            </SVGBox>
            <SVGBox top='45%' left='34%'>
              <GreenBlob />
            </SVGBox>
          </SVGContainer>
        </SectionHero>
      </Container>
    </ExtendedC>
  );
};

export default Hero;
