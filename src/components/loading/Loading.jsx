import React from 'react';
import { LoadingContainer, LoaderTitle, Spinner } from './loadingSC';

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <LoaderTitle>Loading...</LoaderTitle>
        <Spinner />
      </LoadingContainer>
    </>
  );
};

export default Loading;
