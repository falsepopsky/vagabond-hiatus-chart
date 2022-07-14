import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface LinkStyled extends LinkProps {
  content: string;
}

interface LinkProp {
  text?: boolean;
}

const StyledLink = styled.a<LinkProp>`
  margin: 0 0 0.6em;
  max-width: max-content;
  font-weight: 500;
  color: ${({ text }) => (text ? 'rgb(1, 241, 227)' : 'rgb(196, 190, 190)')};
  text-decoration: none;

  &:hover {
    color: rgb(1, 241, 227);
    opacity: 0.8;
  }

  &::selection {
    text-shadow: none;
    color: black;
    background: rgb(1, 241, 227) none repeat scroll 0% 0%;
  }
`;

function NavLink({ href, content }: LinkStyled) {
  return (
    <Link href={href} passHref>
      <StyledLink>{content}</StyledLink>
    </Link>
  );
}

export { NavLink, StyledLink };
