import React from 'react';
import { HeroStyles, HeroSectionHeader, HeroSectionSub } from './hero-styled';
import VagabondLogo from '../../assets/vagabond-jp.svg';
import ArrowSVG from './Arrow';

const HeroSection = () => {
  return (
    <HeroStyles>
      <HeroSectionHeader>
        <h1 className="hero-title">Vagabond Hiatus Chart</h1>
        <figure className="hero-figure">
          <p className="hero-scroll-down">scroll down</p>
          <ArrowSVG />
        </figure>
      </HeroSectionHeader>
      <HeroSectionSub>
        <img
          className="hero-logo"
          src={VagabondLogo}
          alt="Vagabond Logo"
          width="681"
          height="280"
        />
        <h1 className="hero-author">
          Takehiko Inoue
          <span>&#40;井上 雄彦&#41;</span>
        </h1>

        <p className="hero-description">
          A simple way to visualize the actual state of Vagabond with charts.
        </p>
      </HeroSectionSub>
    </HeroStyles>
  );
};

export default HeroSection;
