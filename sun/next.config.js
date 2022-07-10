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
      swcMinify: true,
    };
  }

  return {
    basePath: '/vagabond-hiatus-chart',
    compiler: {
      styledComponents: true,
    },
    swcMinify: true,
  };
};

module.exports = nextConfig;
