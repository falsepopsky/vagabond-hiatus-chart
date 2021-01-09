import React from 'react';
import { AboutMain, AboutSection, TitleAbout } from './aboutSC';

import VagabondAbout from '../assets/vagabond-about.jpg';

const About = () => {
  return (
    <AboutMain>
      <AboutSection>
        <img className="about-image" src={VagabondAbout} alt="vagabond" />
      </AboutSection>

      <AboutSection>
        <TitleAbout>ABOUT</TitleAbout>

        <p className="about-text">
          As a kid I always liked Slam Dunk, then some of my friends told me
          about this manga. I could not believe it that the mangaka of this
          masterpiece it's the same who made SD!
        </p>
        <p className="about-text">
          So my little contribution to this wonderfull community brings me to
          actually build this, hope you guys enjoy it.
        </p>
      </AboutSection>

      <AboutSection>
        <TitleAbout>SPECIAL THANKS</TitleAbout>

        <p className="about-text">
          <strong className="about-shotout">Kawasaki#3316</strong> for providing
          the whole
          <a
            className="about-links"
            href="https://docs.google.com/spreadsheets/d/1fw7G9I2zPtAfSh0NUl-4m7G5wsXe5PIcMFRtd03jVz0/"
            rel="noopener noreferrer"
            target="_blank"
          >
            data
          </a>
          without this project would be very inaccurate.
        </p>

        <p className="about-text">
          <strong className="about-shotout">rentzhx3</strong> for the
          inspiration with his project based on
          <a
            className="about-links"
            href="https://hiatus-hiatus.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hunter X Hunter
          </a>
          .
        </p>
      </AboutSection>
      <AboutSection>
        <TitleAbout>CONTACT</TitleAbout>
        <p className="about-text">
          For business inquires only at <strong className="email-pop"></strong>
          with the subject <strong className="email-subject"></strong>, any
          other message without the subject will be deleted.
        </p>

        <p className="about-text">
          If you just want to write a random message or something else just
          complete this
          <a
            className="about-links"
            href="https://forms.gle/QjtffknkRddEy4TaA"
            rel="noopener noreferrer"
            target="_blank"
          >
            form
          </a>
          .
        </p>
      </AboutSection>
    </AboutMain>
  );
};

export default About;
