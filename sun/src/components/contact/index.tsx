import { ColumnContainer, StyledText, TitleAbout } from '../layout';
import { StyledLink } from '../link';

const Contact = () => (
  <ColumnContainer>
    <TitleAbout>CONTACT</TitleAbout>
    <StyledText>
      For business inquires only at <b>falsepopsky@protonmail.com</b>.
    </StyledText>
    <StyledText>
      Everything related to sugestions, feedback, or any other question, please complete this{' '}
      <StyledLink text href='https://forms.gle/QjtffknkRddEy4TaA' rel='noopener noreferrer' target='_blank'>
        form
      </StyledLink>
      .
    </StyledText>
  </ColumnContainer>
);

export default Contact;
