import React from 'react';
import {
  HeroStyles,
  HeroSectionHeader,
  HeroSectionSub,
  TitleHero,
} from './hero-styled';
import { ArrowSVG, VagabondLogo } from './../svg/Svgs';

const HeroSection = () => {
  return (
    <HeroStyles>
      <HeroSectionHeader>
        <TitleHero maintitle>Vagabond Hiatus Chart</TitleHero>
        <figure className="hero-figure">
          <p className="hero-scroll-down">scroll down</p>
          <ArrowSVG />
        </figure>
      </HeroSectionHeader>
      <HeroSectionSub>
        <VagabondLogo />
        <TitleHero>
          Takehiko Inoue
          <span>&#40;井上 雄彦&#41;</span>
        </TitleHero>

        <p className="hero-description">
          A simple way to visualize the actual state of Vagabond with charts.
        </p>
      </HeroSectionSub>
    </HeroStyles>
  );
};

export default HeroSection;
