import React, { lazy, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import HeroSection from '../components/hero/Hero';
import Heatmap from '../components/heatmap/HiatusHeatmap';
import ChaptersPerYear from '../components/chapters-per-year/ChaptersPerYear';
import ChaptersPerArc from '../components/chapters-per-arc/ChaptersPerArc';
import Footer from '../components/footer/Footer';

const SocialMedia = lazy(() => import('../components/social/Social'));

const Home = () => {
  return (
    <>
      <HeroSection />
      <Heatmap />
      <ChaptersPerYear />
      <Suspense
        fallback={<Spinner animation="border" variant="light" size="sm" />}>
        <SocialMedia />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
