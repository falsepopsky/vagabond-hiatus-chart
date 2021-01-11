import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Container fluid as="main" className="m-0 p-0">
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={HomePage}
            />
            <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Container>
      </ScrollToTop>
    </Router>
  );
}

export default App;
