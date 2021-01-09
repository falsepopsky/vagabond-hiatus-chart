import React from 'react';
import { Link } from 'react-router-dom';
import { NoMatchMain, Glitch } from './noMatchSC';

const NoMatch = () => {
  return (
    <NoMatchMain>
      <Glitch data-text="404">404</Glitch>
      <Link to="/" className="back-home" rel="noopener noreferrer">
        Return to Home Site
      </Link>
    </NoMatchMain>
  );
};

export default NoMatch;
