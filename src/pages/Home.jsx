import React from 'react';
import HeroSection from '../components/hero/Hero';
import ChaptersPerArc from '../components/chapters-per-arc/ChaptersPerArc';
import ChaptersPerYear from '../components/chapters-per-year/ChaptersPerYear';
import Heatmap from '../components/heatmap/HiatusHeatmap';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Heatmap />
      <Footer />
    </>
  );
};

export default Home;
