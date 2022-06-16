import { VagabondLogo, GreenBlob, RedBlob, WhiteBlob } from '../svgs/vectors';
import { Container, SectionHero, HeroP, SpanHero } from './styles';

const Hero = () => {
  return (
    <Container>
      <SectionHero logo>
        <VagabondLogo />
        <HeroP story={'first'}>
          Takehiko Inoue <SpanHero>&#40;井上 雄彦&#41;</SpanHero>
        </HeroP>
      </SectionHero>
    </Container>
  );
};

export default Hero;
