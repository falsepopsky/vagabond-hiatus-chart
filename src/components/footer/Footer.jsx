import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterMain,
  FooterLine,
  FooterSection,
  FooterTitle,
  TextFooter,
  StyledLink,
} from './footerSC';

const Footer = () => {
  return (
    <FooterMain>
      <FooterLine />
      <FooterSection className="section-one">
        <FooterTitle>GENERAL</FooterTitle>
        <TextFooter>The website of Vagabond Hiatus Chart.</TextFooter>
        <TextFooter>
          Some of the images belongs to Takehiko Inoue &amp; Kōdansha.
        </TextFooter>
        <TextFooter>
          For a better experience use firefox and visit the site on desktop
          mode.
        </TextFooter>
      </FooterSection>

      <FooterSection className="section-two">
        <FooterTitle>NAVIGATION</FooterTitle>
        <Link
          to={process.env.PUBLIC_URL + '/'}
          className="nav-link"
          rel="noopener noreferrer">
          Home
        </Link>
        <Link
          to={process.env.PUBLIC_URL + '/about'}
          className="nav-link"
          rel="noopener noreferrer">
          About
        </Link>
      </FooterSection>

      <FooterSection className="section-three">
        <FooterTitle>EXTRA LINKS</FooterTitle>
          <StyledLink
            href="https://itplanning.co.jp/"
            rel="noopener noreferrer"
            target="_blank">
            Takehiko Inoue
          </StyledLink>
          <StyledLink
            href="https://morning.kodansha.co.jp/"
            rel="noopener noreferrer"
            target="_blank">
            Morning Kodansha
          </StyledLink>
          <StyledLink
            href="https://www.reddit.com/r/vagabondmanga/"
            rel="noopener noreferrer"
            target="_blank">
            Reddit Vagabond
          </StyledLink>
      </FooterSection>

      <FooterSection className="section-four">
        <TextFooter copyright>Vagabond Hiatus Chart © 2021</TextFooter>
      </FooterSection>
    </FooterMain>
  );
};

export default Footer;
