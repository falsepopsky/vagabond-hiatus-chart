import { Link } from 'react-router-dom';
import { NoMatchMain, Glitch } from './noMatchSC';

const NoMatch = () => {
  return (
    <NoMatchMain>
      <Glitch>404</Glitch>
      <Link
        to={process.env.PUBLIC_URL + '/'}
        className="back-home"
        rel="noopener noreferrer">
        Return to Home Site
      </Link>
    </NoMatchMain>
  );
};

export default NoMatch;
