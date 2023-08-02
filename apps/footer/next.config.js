const NextFederationPlugin = require('@module-federation/nextjs-mf');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');
const path = require('node:path');
module.exports = withNx({
  output: 'standalone',
  images: {
    domains: [''],
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    scrollRestoration: true,
  },
  basePath: '',
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'footer',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './index': './pages/index.tsx',
        },
      })
    );

    return config;
  },
});
