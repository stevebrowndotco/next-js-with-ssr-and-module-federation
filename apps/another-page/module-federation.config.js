module.exports = {
  name: 'another-page',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
