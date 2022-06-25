import { Container, HeroP, SectionHero, SpanHero } from './styles';
import { VagabondLogo } from './svg';

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
