import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HeroStyles } from './hero-styled';
import VagabondLogo from '../../assets/vagabond-jp.svg';
import ArrowDown from '../../assets/arrow-down.svg';

const HeroSection = () => {
  return (
    <HeroStyles>
      <Row as="section" className="hero-section">
        <Col className="hero-section-col">
          <h1 className="hero-section-main">Vagabond Hiatus Chart</h1>
          <figure>
            <img
              className="hero-section-arrow"
              src={ArrowDown}
              alt="arrow down by Freepik"
            />
          </figure>
        </Col>
      </Row>
      <Row as="section">
        <Col>
          <img className="hero-section-logo" src={VagabondLogo} alt="logo" />
          <h1 className="hero-section-author">
            Takehiko Inoue
            <span>&#40;井上 雄彦&#41;</span>
          </h1>

          <p>
            A simple way to visualize the actual state of Vagabond with charts.
          </p>
        </Col>
      </Row>
    </HeroStyles>
  );
};

export default HeroSection;
