import { Timeline } from 'react-twitter-widgets';
import styled from 'styled-components';
import { LineContainer, SectionContainer, Title } from '../styled/globalUI';

const TwitterBox = styled.article`
  height: 480px;
`;

const twitterOptions = {
  info: {
    sourceType: 'profile',
    screenName: 'inouetake',
  },
  styles: {
    theme: 'dark',
    chrome: 'noheader nofooter',
    width: '400',
    maxWidth: '500',
    height: '460',
  },
};

const SocialMedia = () => {
  return (
    <SectionContainer>
      <LineContainer borderColor='rgb(77, 213, 167, 0.9)' />
      <Title>SOCIAL MEDIA</Title>
      <TwitterBox>
        <Timeline dataSource={twitterOptions.info} options={twitterOptions.styles} />
      </TwitterBox>
    </SectionContainer>
  );
};

export default SocialMedia;
