import React from 'react';
import { LoadingContainer } from './loadingSC';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <h2 className="loading-title">Loading...</h2>
        <Spinner animation="border" variant="light" size="sm"></Spinner>
      </LoadingContainer>
    </>
  );
};

export default Loading;
