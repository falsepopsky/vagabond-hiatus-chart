import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HeroStyles } from './hero-styled';
import VagabondLogo from '../../assets/vagabond-logo.svg';
import ArrowDown from '../../assets/arrow-down.svg';

const HeroSection = () => {
  return (
    <HeroStyles>
      <Row as="section" className="vagabond-background">
        <Col className="full-heigth">
          <h1 className="hero-text-main">Vagabond Hiatus Chart</h1>
          <figure>
            <img
              className="arrow-down-freepik"
              src={ArrowDown}
              alt="arrow down by Freepik"
            />
          </figure>
        </Col>
      </Row>
      <Row as="section">
        <Col>
          <img className="vagabond-logo" src={VagabondLogo} alt="logo" />
          <h1 className="hero-text-sub">
            Takehiko Inoue
            <span>(井上 雄彦)</span>
          </h1>
        </Col>
      </Row>
    </HeroStyles>
  );
};

export default HeroSection;
