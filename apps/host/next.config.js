const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    header: `header@http://localhost:4201/_next/static/${location}/remoteEntry.js`,
    plp: `plp@http://localhost:4300/_next/static/${location}/remoteEntry.js`,
    footer: `footer@http://localhost:4202/_next/static/${location}/remoteEntry.js`,
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
