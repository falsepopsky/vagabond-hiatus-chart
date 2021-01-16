import React from 'react';
import {
  SocialContainer,
  SocialLine,
  SocialTitleBox,
  TwitterBox,
  DisqusBox,
} from './SocialSC';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { DiscussionEmbed } from 'disqus-react';

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

        <DisqusBox>
          <DiscussionEmbed
            shortname="vhchart"
            config={{
              url: 'https://falsepopsky.github.io/vagabond-hiatus-chart/',
              identifier: 'Vagabond Chart Chat',
              title: 'Vagabond Chart Chat',
            }}
          />
        </DisqusBox>
      </SocialContainer>
    </>
  );
};

export default SocialMedia;
