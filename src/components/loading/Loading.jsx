import { LoadingContainer, LoaderTitle, Spinner } from './loadingSC';

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <Spinner />
        <LoaderTitle>Loading...</LoaderTitle>
      </LoadingContainer>
    </>
  );
};

export default Loading;
