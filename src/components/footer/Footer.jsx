import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterStyles } from './footer-sc';

const Footer = () => {
  return (
    <>
      <Container fluid as="footer" className="m-0 p-0 mt-auto">
        <FooterStyles>
          <Row as="section" className="m-0">
            <Col className="text-center mt-5 my-3">
              <p className="footer-text-content">
                The website of Vagabond Hiatus Chart © 2020
              </p>
              <Link
                to="/"
                className="nav-link footer-text-content"
                rel="noopener noreferrer"
              >
                home
              </Link>
              <Link to="/about" className="nav-link" rel="noopener noreferrer">
                about
              </Link>
            </Col>
          </Row>
        </FooterStyles>
      </Container>
    </>
  );
};

export default Footer;
