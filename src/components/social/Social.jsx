import React from 'react';
import { TwitterBox } from './SocialSC';
import {
  TitleContainer,
  Title,
  LineContainer,
  SectionContainer,
} from '../styled-components/globalUI';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const SocialMedia = () => {
  return (
    <SectionContainer>
      <LineContainer borderColor="rgb(77, 213, 167, 0.9)" />
      <TitleContainer>
        <Title>SOCIAL MEDIA</Title>
      </TitleContainer>
      <TwitterBox>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="inouetake"
          theme="dark"
          noHeader
          noFooter
          noScrollbar
          options={{ width: 400, maxWidth: 500, height: 460 }}
        />
      </TwitterBox>
    </SectionContainer>
  );
};

export default SocialMedia;
