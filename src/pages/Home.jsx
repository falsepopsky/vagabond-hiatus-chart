import React from 'react';
import HeroSection from '../components/hero/Hero';
import HiatusHeatmap from '../components/hiatus-heatmap/Hiatus';
import ChaptersPerArc from '../components/chapters-per-arc/ChaptersPerArc';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ChaptersPerArc />
    </>
  );
};

export default Home;
