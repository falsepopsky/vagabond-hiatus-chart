import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterMain,
  FooterLine,
  FooterSection,
  FooterTitle,
  ExtraLinks,
} from './footerSC';

const Footer = () => {
  return (
    <FooterMain>
      <FooterLine></FooterLine>
      <FooterSection className="section-one">
        <FooterTitle>GENERAL</FooterTitle>

        <p className="about-text">The website of Vagabond Hiatus Chart.</p>
        <p className="about-text">
          Some of the images belongs to Takehiko Inoue &amp; Kōdansha.
        </p>

        <p className="about-text">
          For a better experience use firefox and visit the site on desktop
          mode.
        </p>
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
        <ExtraLinks>
          <li>
            <a
              href="https://itplanning.co.jp/"
              rel="noopener noreferrer"
              target="_blank">
              Takehiko Inoue
            </a>
          </li>
          <li>
            <a
              href="https://morning.kodansha.co.jp/"
              rel="noopener noreferrer"
              target="_blank">
              Morning Kodansha
            </a>
          </li>
        </ExtraLinks>
      </FooterSection>

      <FooterSection className="section-four">
        <p className="footer-text-copyrigth">Vagabond Hiatus Chart © 2021</p>
      </FooterSection>
    </FooterMain>
  );
};

export default Footer;
