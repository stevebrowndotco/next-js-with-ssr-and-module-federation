const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'footer',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './index': './pages/index.tsx',
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
