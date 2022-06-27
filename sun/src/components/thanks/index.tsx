import { ColumnContainer, StyledText, TitleAbout } from '../layout';
import { StyledLink } from '../link';

const Thanks = () => (
  <ColumnContainer>
    <TitleAbout>SPECIAL THANKS</TitleAbout>
    <StyledText>
      <b>Kawasaki#3316</b> for providing almost the whole{' '}
      <StyledLink
        text
        href='https://docs.google.com/spreadsheets/d/1fw7G9I2zPtAfSh0NUl-4m7G5wsXe5PIcMFRtd03jVz0/'
        rel='noopener noreferrer'
        target='_blank'>
        data
      </StyledLink>{' '}
      without this project would be very inaccurate.
    </StyledText>
    <StyledText>
      <b>rentzhx3</b> for the inspiration with his project based on{' '}
      <StyledLink text href='https://hiatus-hiatus.github.io/' rel='noopener noreferrer' target='_blank'>
        Hunter X Hunter
      </StyledLink>
      .
    </StyledText>
  </ColumnContainer>
);

export default Thanks;
