import { SectionHeader, SectionSub, TitleHero } from './hero-styled';
import { ArrowSVG, VagabondLogo } from './../svg/Svgs';

const HeroSection = () => {
  return (
    <>
      <SectionHeader>
        <TitleHero maintitle>
          <p>VAGABOND</p>
          <p>HIATUS</p>
          <p>CHART</p>
        </TitleHero>
        <figure className="hero-figure">
          <p className="hero-scroll-down">scroll down</p>
          <ArrowSVG />
        </figure>
      </SectionHeader>
      <SectionSub>
        <VagabondLogo />
        <TitleHero>
          Takehiko Inoue
          <span>&#40;井上 雄彦&#41;</span>
        </TitleHero>

        <p className="hero-description">
          A simple way to visualize the actual state of Vagabond with charts.
        </p>
      </SectionSub>
    </>
  );
};

export default HeroSection;
