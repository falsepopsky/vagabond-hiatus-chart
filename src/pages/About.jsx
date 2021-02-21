import React from 'react';
import { AboutMain, AboutSection, TitleAbout } from './aboutSC';
import Footer from '../components/footer/Footer';
import VagabondAbout from '../assets/vagabond-about.jpg';

const About = () => {
  return (
    <>
      <AboutMain>
        <AboutSection>
          <img
            loading="lazy"
            className="about-image"
            src={VagabondAbout}
            alt="vagabond"
          />
        </AboutSection>

        <AboutSection>
          <TitleAbout>ABOUT</TitleAbout>

          <p className="about-text">
            As a kid I always liked Slam Dunk, then some of my friends told me
            about this manga. I could not believe it that the mangaka of this
            masterpiece it's the same who made SD!
          </p>
          <p className="about-text">
            So this is my little contribution, i'm planning to build the same
            project with more titles, when the project it's ready i will make an
            announcement in the home site, so stay stuned, and hope you guys
            like it!.
          </p>
        </AboutSection>

        <AboutSection>
          <TitleAbout>SPECIAL THANKS</TitleAbout>

          <p className="about-text">
            <strong className="about-shotout">Kawasaki#3316</strong> for
            providing the whole
            <a
              className="about-links"
              href="https://docs.google.com/spreadsheets/d/1fw7G9I2zPtAfSh0NUl-4m7G5wsXe5PIcMFRtd03jVz0/"
              rel="noopener noreferrer"
              target="_blank">
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
              target="_blank">
              Hunter X Hunter
            </a>
            .
          </p>
        </AboutSection>
        <AboutSection>
          <TitleAbout>CONTACT</TitleAbout>
          <p className="about-text">
            For business inquires only at
            <b className="email-pop">moc.liamnotorp@ykspopeslaf</b> with the
            subject <b className="email-subject">ved ssenisub</b>, any other
            message without the subject will be deleted.
          </p>

          <p className="about-text">
            If you just want to write a random message or something else just
            complete this
            <a
              className="about-links"
              href="https://forms.gle/QjtffknkRddEy4TaA"
              rel="noopener noreferrer"
              target="_blank">
              form
            </a>
            .
          </p>
        </AboutSection>
      </AboutMain>
      <Footer />
    </>
  );
};

export default About;
