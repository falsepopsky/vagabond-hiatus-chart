import { TwitterBox } from './SocialSC';
import {
  Title,
  LineContainer,
  SectionContainer,
} from '../styled-components/globalUI';
import { Timeline } from 'react-twitter-widgets';

const twitterOptions = {
  info: {
    sourceType: 'profile',
    screenName: 'inouetake',
  },
  styles: {
    theme: 'dark',
    chrome: 'noheader nofooter noscrollbar',
    width: '400',
    maxWidth: '500',
    height: '460',
  },
};

const SocialMedia = () => {
  return (
    <SectionContainer>
      <LineContainer borderColor="rgb(77, 213, 167, 0.9)" />
      <Title>SOCIAL MEDIA</Title>
      <TwitterBox>
        <Timeline
          dataSource={twitterOptions.info}
          options={twitterOptions.styles}
        />
      </TwitterBox>
    </SectionContainer>
  );
};

export default SocialMedia;
