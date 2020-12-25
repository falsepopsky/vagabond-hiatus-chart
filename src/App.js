import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Container fluid>
        <Route exact path="/" children={<HomePage />} />
      </Container>
    </Router>
  );
}

export default App;
