import { lazy, Suspense } from 'react';
import { StyledMain } from './../components/styled-components/globalUI';
import NewH from '../components/new-hero/newh';
import Heatmap from '../components/heatmap/HiatusHeatmap';
import Loading from '../components/loading/Loading';
import Stats from '../components/stats/Stats';
import Footer from '../components/footer/Footer';

const ChaptersPerYear = lazy(() =>
  import('../components/chapters-per-year/ChaptersPerYear')
);
const ChaptersPerArc = lazy(() =>
  import('../components/chapters-per-arc/ChaptersPerArc')
);
const SocialMedia = lazy(() => import('../components/social/Social'));

const Home = () => {
  return (
    <>
      <StyledMain>
        <NewH />
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
