const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { createDelegatedModule } = require('@module-federation/utilities');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const { withNx } = require('@nx/next');
const path = require('node:path');
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  const headerHost = process.env.PRODUCTION
    ? 'https://next-mf-header.vercel.app'
    : 'http://localhost:4201';
  const plpHost = process.env.PRODUCTION
    ? 'https://next-mf-plp.vercel.app'
    : 'http://localhost:4300';

  const pdpHost = process.env.PRODUCTION
    ? 'https://next-mf-plp.vercel.app'
    : 'http://localhost:4205';

  return {
    header: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `header@${headerHost}/_next/static/${location}/remoteEntry.js`,
    }),
    plp: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `plp@${plpHost}/_next/static/${location}/remoteEntry.js`,
    }),
    pdp: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `pdp@${pdpHost}/_next/static/${location}/remoteEntry.js`,
    }),
  };
};

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
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
      })
    );

    return config;
  },
});
