import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HeroStyles } from './hero-styled';
import vagabondLogo from '../../assets/vagabond-logo.svg';

const HeroSection = () => {
  return (
    <HeroStyles>
      <Row as="section" className="vagabond-background">
        <Col className="full-heigth"></Col>
      </Row>
      <Row as="section">
        <Col>
          <img className="vagabond-logo" src={vagabondLogo} alt="logo" />
          <h1 className="hero-text-main">by Takehiko Inoue</h1>
        </Col>
      </Row>
    </HeroStyles>
  );
};

export default HeroSection;
