import React from 'react';
import { SocialContainer, TwitterBox, DisqusBox } from './SocialSC';
import Spinner from 'react-bootstrap/Spinner';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { DiscussionEmbed } from 'disqus-react';

const SocialMedia = () => {
  return (
    <>
      <SocialContainer>
        <TwitterBox>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="inouetake"
            theme="dark"
            noHeader
            noFooter
            noScrollbar
            options={{ width: 400, maxWidth: 500, height: 400 }}
            placeholder={<Spinner animation="border" />}
          />
        </TwitterBox>
        <DisqusBox>
          <DiscussionEmbed
            shortname="vhchart"
            config={{
              url: 'https://falsepopsky.github.io/vagabond-hiatus-chart',
              width: 400,
              height: 200,
            }}
          />
        </DisqusBox>
      </SocialContainer>
    </>
  );
};

export default SocialMedia;
