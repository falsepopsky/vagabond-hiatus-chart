import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import ScrollToTop from 'react-router-scroll-top';
import Loading from './../components/loading/Loading';

const Home = loadable(() => pMinDelay(import('./Home'), 1500), {
  fallback: <Loading />,
});

const About = loadable(() => pMinDelay(import('./About'), 1000), {
  fallback: <Loading />,
});

const NoMatch = loadable(() => import('./NoMatch'));

const PagesRouter = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route component={NoMatch} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default PagesRouter;
