import VagabondAbout from '../assets/vagabond-about.jpg';
import Footer from '../components/footer/Footer';
import {
  SectionContainer,
  StyledImage,
  StyledLink,
  StyledMain,
  StyledText,
  TitleAbout,
} from './../components/styled/globalUI';

const DataDrive =
  'https://docs.google.com/spreadsheets/d/1fw7G9I2zPtAfSh0NUl-4m7G5wsXe5PIcMFRtd03jVz0/';
const HiatusGH = 'https://hiatus-hiatus.github.io/';
const Form = 'https://forms.gle/QjtffknkRddEy4TaA';

const About = () => {
  return (
    <>
      <StyledMain>
        <SectionContainer pad={'20px 3vw'}>
          <StyledImage loading='lazy' src={VagabondAbout} alt='vagabond' width={600} height={450} />
        </SectionContainer>
        <SectionContainer pad={'20px 3vw'}>
          <TitleAbout>ABOUT</TitleAbout>

          <StyledText>
            As a kid I always liked Slam Dunk, then some of my friends told me about this manga. I
            could not believe it that the mangaka of this masterpiece it's the same who made SD!
          </StyledText>
          <StyledText>
            So this is my little contribution, i'm planning to build the same project with more
            titles, when the project it's ready i will make an announcement in the home site, so
            stay stuned, and hope you guys like it !
          </StyledText>
        </SectionContainer>
        <SectionContainer pad={'20px 3vw'}>
          <TitleAbout>SPECIAL THANKS</TitleAbout>

          <StyledText>
            <b className='about-shotout'>Kawasaki#3316</b> for providing the whole{' '}
            <StyledLink href={DataDrive} rel='noopener noreferrer' target='_blank'>
              data
            </StyledLink>{' '}
            without this project would be very inaccurate.
          </StyledText>

          <StyledText>
            <b className='about-shotout'>rentzhx3</b> for the inspiration with his project based on{' '}
            <StyledLink href={HiatusGH} rel='noopener noreferrer' target='_blank'>
              Hunter X Hunter
            </StyledLink>
            .
          </StyledText>
        </SectionContainer>
        <SectionContainer pad={'20px 3vw'}>
          <TitleAbout>CONTACT</TitleAbout>
          <StyledText>
            For business inquires only at <b className='reverse'>moc.liamnotorp@ykspopeslaf</b> with
            the subject <b className='reverse'>ved ssenisub</b>, any other message without the
            subject will be deleted.
          </StyledText>

          <StyledText>
            If you just want to write a random message or something else just complete this{' '}
            <StyledLink href={Form} rel='noopener noreferrer' target='_blank'>
              form
            </StyledLink>
            .
          </StyledText>
        </SectionContainer>
      </StyledMain>
      <Footer />
    </>
  );
};

export default About;
