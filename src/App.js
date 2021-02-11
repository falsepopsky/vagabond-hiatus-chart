import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import HomePage from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={HomePage}
          />
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
