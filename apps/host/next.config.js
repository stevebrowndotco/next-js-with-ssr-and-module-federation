const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  const headerHost = process.env.PRODUCTION
    ? 'https://next-mf-header.vercel.app'
    : 'http://localhost:4201';
  const plpHost = process.env.PRODUCTION
    ? 'https://next-mf-plp.vercel.app'
    : 'http://localhost:4300';

  return {
    header: `header@http://${headerHost}/_next/static/${location}/remoteEntry.js`,
    plp: `plp@${plpHost}/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
