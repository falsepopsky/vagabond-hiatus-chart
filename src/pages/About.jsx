import { AboutSection, StyledLink } from './aboutSC';
import {
  StyledText,
  StyledMain,
  TitleAbout,
} from './../components/styled-components/globalUI';
import Footer from '../components/footer/Footer';
import VagabondAbout from '../assets/vagabond-about.jpg';

const DataDrive =
  'https://docs.google.com/spreadsheets/d/1fw7G9I2zPtAfSh0NUl-4m7G5wsXe5PIcMFRtd03jVz0/';
const HiatusGH = 'https://hiatus-hiatus.github.io/';
const Form = 'https://forms.gle/QjtffknkRddEy4TaA';

const About = () => {
  return (
    <>
      <StyledMain>
        <AboutSection>
          <img
            loading="lazy"
            className="about-image"
            src={VagabondAbout}
            alt="vagabond"
            width={600}
            height={450}
          />
        </AboutSection>

        <AboutSection>
          <TitleAbout>ABOUT</TitleAbout>

          <StyledText>
            As a kid I always liked Slam Dunk, then some of my friends told me
            about this manga. I could not believe it that the mangaka of this
            masterpiece it's the same who made SD!
          </StyledText>
          <StyledText>
            So this is my little contribution, i'm planning to build the same
            project with more titles, when the project it's ready i will make an
            announcement in the home site, so stay stuned, and hope you guys
            like it!.
          </StyledText>
        </AboutSection>

        <AboutSection>
          <TitleAbout>SPECIAL THANKS</TitleAbout>

          <StyledText>
            <strong className="about-shotout">Kawasaki#3316</strong> for
            providing the whole{' '}
            <StyledLink
              href={DataDrive}
              rel="noopener noreferrer"
              target="_blank">
              data
            </StyledLink>{' '}
            without this project would be very inaccurate.
          </StyledText>

          <StyledText>
            <strong className="about-shotout">rentzhx3</strong> for the
            inspiration with his project based on{' '}
            <StyledLink
              href={HiatusGH}
              rel="noopener noreferrer"
              target="_blank">
              Hunter X Hunter
            </StyledLink>
            .
          </StyledText>
        </AboutSection>
        <AboutSection>
          <TitleAbout>CONTACT</TitleAbout>
          <StyledText>
            For business inquires only at{' '}
            <b className="email-pop">moc.liamnotorp@ykspopeslaf</b> with the
            subject <b className="email-subject">ved ssenisub</b>, any other
            message without the subject will be deleted.
          </StyledText>

          <StyledText>
            If you just want to write a random message or something else just
            complete this{' '}
            <StyledLink href={Form} rel="noopener noreferrer" target="_blank">
              form
            </StyledLink>
            .
          </StyledText>
        </AboutSection>
      </StyledMain>
      <Footer />
    </>
  );
};

export default About;
