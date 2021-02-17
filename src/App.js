import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import ScrollToTop from 'react-router-scroll-top';
import Loading from './components/loading/Loading';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <Loading />,
});
const About = Loadable({
  loader: () => import('./pages/About'),
  loading: () => <Loading />,
});
const NoMatch = Loadable({
  loader: () => import('./pages/NoMatch'),
  loading: () => <Loading />,
});

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/about'}
            component={About}
          />
          <Route component={NoMatch} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
