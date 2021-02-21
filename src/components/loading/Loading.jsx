import React from 'react';
import { LoadingContainer, Spinner } from './loadingSC';

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <h2 className="loading-title">Loading...</h2>
        <Spinner />
      </LoadingContainer>
    </>
  );
};

export default Loading;
