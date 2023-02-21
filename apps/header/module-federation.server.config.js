// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'header',
  exposes: {
    './Module': 'apps/header/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
