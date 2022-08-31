import { lazy, Suspense } from 'react';
import Footer from '../components/footer/Footer';
import Heatmap from '../components/heatmap/HiatusHeatmap';
import Hero from '../components/hero/Hero';
import Loading from '../components/loading/Loading';
import Stats from '../components/stats/Stats';
import { StyledMain } from './../components/styled/globalUI';

const ChaptersPerYear = lazy(() => import('../components/chapters-per-year/ChaptersPerYear'));
const ChaptersPerArc = lazy(() => import('../components/chapters-per-arc/ChaptersPerArc'));
const SocialMedia = lazy(() => import('../components/social/Social'));

const Home = () => {
  return (
    <>
      <StyledMain>
        <Hero />
        <Stats />
        <Heatmap />
        <Suspense fallback={<Loading />}>
          <ChaptersPerYear />
          <ChaptersPerArc />
          <SocialMedia />
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
