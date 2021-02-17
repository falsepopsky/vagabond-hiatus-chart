import React from 'react';
import {
  SocialContainer,
  SocialLine,
  SocialTitleBox,
  TwitterBox,
} from './SocialSC';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const SocialMedia = () => {
  return (
    <>
      <SocialContainer>
        <SocialLine></SocialLine>
        <SocialTitleBox>
          <h2 className="social-title">SOCIAL MEDIA</h2>
        </SocialTitleBox>
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
      </SocialContainer>
    </>
  );
};

export default SocialMedia;
