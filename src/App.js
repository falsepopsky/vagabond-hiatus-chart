import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/Home';
import About from './pages/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Container fluid as="main" className="m-0 p-0">
        <Switch>
          <Route exact path="/" children={<HomePage />} />
          <Route path="/about" children={<About />} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
