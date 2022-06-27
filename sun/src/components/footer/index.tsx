import { NavLink, StyledLink } from 'component/link';
import { Science } from './science';
import { Boxf, Containerf, FooterLine, Textf, Titlef } from './styles';

const Footer = () => (
  <Containerf>
    <FooterLine />
    <Boxf general>
      <Titlef>General</Titlef>
      <Textf>The website of Vagabond Hiatus Chart.</Textf>
      <Textf>Some of the images belongs to Takehiko Inoue &amp; Kōdansha.</Textf>
      <Textf>For a better experience use firefox and visit the site on desktop mode.</Textf>
      <Science />
    </Boxf>
    <Boxf>
      <Titlef>Navigation</Titlef>
      <NavLink href={'/'} content={'Home'} />
      <NavLink href={'/about'} content={'About'} />
    </Boxf>
    <Boxf>
      <Titlef>External Links</Titlef>
      <StyledLink href='https://itplanning.co.jp/' rel='noopener noreferrer' target='_blank'>
        Takehiko Inoue
      </StyledLink>
      <StyledLink href='https://morning.kodansha.co.jp/' rel='noopener noreferrer' target='_blank'>
        Morning Kodansha
      </StyledLink>
      <StyledLink href='https://www.reddit.com/r/vagabondmanga/' rel='noopener noreferrer' target='_blank'>
        Reddit Vagabond
      </StyledLink>
    </Boxf>
    <Textf copyright>Vagabond Hiatus Chart © 2021 - 2022.</Textf>
  </Containerf>
);

export default Footer;
