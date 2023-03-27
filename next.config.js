const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
      experimental: {
        // Required:
        appDir: true,
      },
      env: {
        mongodb_username: 'Hassan',
        mongodb_password: 'Dontfeelblue23',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'eventsdev',
      },
    };
  }
  return {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    experimental: {
      // Required:
      appDir: true,
    },
    env: {
      mongodb_username: 'Hassan',
      mongodb_password: 'Dontfeelblue23',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'events',
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
};
