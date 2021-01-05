import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterStyles } from './footerSC';

const Footer = () => {
  return (
    <>
      <FooterStyles>
        <Row as="footer" className="m-0 p-0 mt-auto">
          <Col>
            <Row>
              <Col className="text-center">
                <Link to="/" className="nav-link p-0" rel="noopener noreferrer">
                  home
                </Link>
                <Link
                  to="/about"
                  className="nav-link p-0 ml-2"
                  rel="noopener noreferrer"
                >
                  about
                </Link>
              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <p className="footer-text-content">
                  The website of Vagabond Hiatus Chart © 2021
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
