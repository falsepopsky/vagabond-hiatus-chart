import styled from 'styled-components';

const WrapInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 916px) {
    .musashi {
      display: none;
    }
  }
`;

const BoxInfo = styled.div`
  flex-basis: 400px;
  gap: 1.5em 0;
  display: flex;
  flex-flow: column nowrap;

  @media (max-width: 916px) {
    flex-basis: auto;
  }
`;

const BoxBorder = styled.div`
  padding-bottom: 0.4em;
  border-bottom: 1px solid #1fffe4;
  display: flex;
  justify-content: space-between;
`;

const TextInfo = styled.p`
  font-weight: 300;
`;

export { WrapInfo, TextInfo, BoxBorder, BoxInfo };
