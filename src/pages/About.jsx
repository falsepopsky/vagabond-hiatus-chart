import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <>
      <Row as="section" className="m-0" style={{ backgroundColor: 'black' }}>
        <Col className="text-center mt-5 my-3">
          <h3 style={{ color: 'white' }}>Special Thanks</h3>

          <p>
            Thanks to Kawasaki#3316 for the whole data without this the project
            will not exist
          </p>
        </Col>
      </Row>
      <Row as="section" className="m-0" style={{ backgroundColor: 'black' }}>
        <Col className="text-center mt-5 my-3">
          <h3 style={{ color: 'white' }}>More info</h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            dolorem harum saepe. Reiciendis asperiores magnam id illum at
            perspiciatis aliquam natus iste! Ipsa distinctio ullam iste officia
            perferendis. Id, accusamus?
          </p>
        </Col>
      </Row>
    </>
  );
};

export default About;
