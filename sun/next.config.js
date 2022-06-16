/**
 * @type {import('next').NextConfig}
 **/

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      compiler: {
        styledComponents: true,
      },
    };
  }

  return {
    basePath: '/vagabond-hiatus-chart',
    compiler: {
      styledComponents: true,
    },
  };
};

module.exports = nextConfig;
