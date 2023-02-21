// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'another-page',
  exposes: {
    './Module': 'apps/another-page/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
