import React from 'react';
import { HeroStyles, HeroSectionHeader, HeroSectionSub } from './hero-styled';
import VagabondLogo from '../../assets/vagabond-jp.svg';
import ArrowDown from '../../assets/arrow-down.svg';

const HeroSection = () => {
  return (
    <HeroStyles>
      <HeroSectionHeader>
        <h1 className="hero-title">Vagabond Hiatus Chart</h1>
        <figure className="hero-figure">
          <p className="hero-scroll-down">scroll down</p>
          <img
            className="hero-arrow"
            src={ArrowDown}
            alt="arrow down by Freepik"
            width="30"
            height="30"
          />
        </figure>
      </HeroSectionHeader>
      <HeroSectionSub>
        <img
          className="hero-logo"
          src={VagabondLogo}
          alt="logo"
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
