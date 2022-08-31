import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoMatchMain = styled.main`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;

  .back-home {
    color: #c4bebe;
    display: block;
    text-decoration: none;

    &:hover {
      color: #01f1e3;
    }
  }
`;

const ErrorBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2em;

  p {
    margin: 0;
  }
`;

const NoMatch = () => {
  return (
    <NoMatchMain>
      <ErrorBox>
        <p>404 | This page could not be found</p>
        <Link to={process.env.PUBLIC_URL + '/'} className='back-home' rel='noopener noreferrer'>
          Return to Home Site
        </Link>
      </ErrorBox>
    </NoMatchMain>
  );
};

export default NoMatch;
