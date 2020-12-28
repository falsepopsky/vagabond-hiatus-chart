import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <>
      <Container fluid as="footer" className="m-0 p-0 mt-auto">
        <Row as="section" className="m-0" style={{ backgroundColor: 'black' }}>
          <Col className="text-center mt-5 my-3">
            <p className="first-font" style={{ color: 'white' }}>
              The website of Vagabond Hiatus Chart © 2020
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
