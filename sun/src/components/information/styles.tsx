import styled from 'styled-components';

const WrapInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const BoxBorder = styled.div`
  padding-bottom: 0.4em;
  border-bottom: 1px solid #1fffe4;
  display: flex;
  justify-content: space-between;
`;

const TextInfo = styled.p`
  margin: 0;
`;

export { WrapInfo, TextInfo, BoxBorder };
