import styled from 'styled-components';

export const AboutSection = styled.section`
  margin: 0;
  padding: 20px 3vw;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: ${({ theme }) => theme.familyFont.primary};

  .about-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 6px;
  }
`;

export const StyledLink = styled.a`
  color: #01f1e3;
  text-decoration: none;

  &:hover {
    color: #d00;
    text-decoration: none;
  }
`;
