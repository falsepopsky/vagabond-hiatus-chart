import React from 'react';
import HeroSection from '../components/hero/Hero';
import Heatmap from '../components/heatmap/HiatusHeatmap';
import ChaptersPerYear from '../components/chapters-per-year/ChaptersPerYear';
import SocialMedia from '../components/social/Social';
import ChaptersPerArc from '../components/chapters-per-arc/ChaptersPerArc';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Heatmap />
      <ChaptersPerYear />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Home;
