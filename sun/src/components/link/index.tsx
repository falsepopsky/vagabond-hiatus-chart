import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface LinkStyled extends LinkProps {
  content: string;
}

const StyledLink = styled.a<{ $text?: boolean }>`
  margin: 0 0 0.6em;
  max-width: max-content;
  font-weight: 300;
  font-size: ${({ $text }) => ($text ? '1.2rem' : '0.9rem')};
  color: ${({ $text }) => ($text ? 'rgb(1, 241, 227)' : 'rgb(196, 190, 190)')};
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

function NavLink({ href, content }: LinkStyled) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink>{content}</StyledLink>
    </Link>
  );
}

export { NavLink, StyledLink };
