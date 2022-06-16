import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface LinkStyled extends LinkProps {
  name: string;
}

const StyledLink = styled.a`
  margin: 0 0 0 1em;
  max-width: max-content;
  font-weight: 500;
  color: rgb(196, 190, 190);
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

function NavLink({ href, name }: LinkStyled) {
  return (
    <Link href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
}

export default NavLink;
