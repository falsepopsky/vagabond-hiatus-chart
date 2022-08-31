import { ArticleTwo, StyledP } from './styles';

const HiatusLegendChapter = () => {
  return (
    <ArticleTwo flow={'column nowrap'} two={'space-evenly'}>
      <div>
        <StyledP color={'#f4f7f3'} backgroundColor={'#f4f7f3'}>
          Double Weekly Issue
        </StyledP>
      </div>
      <div>
        <StyledP color={'#70ddc6'} backgroundColor={'#70ddc6'}>
          New Chapter
        </StyledP>
      </div>
      <div>
        <StyledP color={'#f95d5a'} backgroundColor={'#f95d5a'}>
          Doesn’t appear in Morning Issue
        </StyledP>
      </div>
    </ArticleTwo>
  );
};

export default HiatusLegendChapter;
