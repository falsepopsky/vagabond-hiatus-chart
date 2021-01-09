import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterStyles, TitleFooter, ExtraLinks, BoxFooter } from './footerSC';

const Footer = () => {
  return (
    <>
      <FooterStyles>
        <Row className="m-0 p-0 mt-auto">
          <Col className="content-footer">
            <Row className="content-footer-row">
              <BoxFooter>
                <TitleFooter>GENERAL</TitleFooter>
                <p>The website of Vagabond Hiatus Chart.</p>
                <p>
                  Some of the images belongs to Takehiko Inoue, Kōdansha &amp;
                  Shueisha &copy;.
                </p>
              </BoxFooter>

              <BoxFooter>
                <TitleFooter>NAVIGATION</TitleFooter>

                <Link to="/" className="nav-link" rel="noopener noreferrer">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-link"
                  rel="noopener noreferrer"
                >
                  About
                </Link>
              </BoxFooter>

              <BoxFooter>
                <TitleFooter>EXTRA LINKS</TitleFooter>

                <ExtraLinks>
                  <li>
                    <a
                      className="extra-links"
                      href="https://itplanning.co.jp/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Takehiko Inoue
                    </a>
                  </li>
                  <li>
                    <a
                      className="extra-links"
                      href="https://morning.kodansha.co.jp/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Morning Kodansha
                    </a>
                  </li>
                </ExtraLinks>
              </BoxFooter>

              <Col md={12}>
                <p className="footer-text-content">
                  Vagabond Hiatus Chart © 2021
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </FooterStyles>
    </>
  );
};

export default Footer;
