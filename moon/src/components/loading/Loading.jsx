import { LoaderTitle, LoadingContainer, Spinner } from './styles';

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
