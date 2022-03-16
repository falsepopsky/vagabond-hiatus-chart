import {
  SectionHeader,
  BoxHero,
  Artist,
  StyledSpan,
  MiniBox,
  StyledH1,
  HeroText,
} from './index-style';
import { VagabondLogo, Green, Red, White } from './../svg/Svgs';

const NewH = () => {
  return (
    <>
      <SectionHeader>
        <BoxHero logo>
          <VagabondLogo />
          <Artist>
            Takehiko Inoue <StyledSpan>&#40;井上 雄彦&#41;</StyledSpan>
          </Artist>
        </BoxHero>
        <BoxHero>
          <MiniBox>
            <StyledH1>
              <HeroText>VAGABOND</HeroText>
              <HeroText>HIATUS</HeroText>
              <HeroText>CHART</HeroText>
            </StyledH1>
            <HeroText story>
              A simple way to visualize the actual state of Vagabond with
              charts.
            </HeroText>
          </MiniBox>
          <MiniBox blob>
            <div className="box redbox">
              <Red />
            </div>
            <div className="box whitebox">
              <White />
            </div>
            <div className="box greenbox">
              <Green />
            </div>
          </MiniBox>
        </BoxHero>
      </SectionHeader>
    </>
  );
};

export default NewH;
