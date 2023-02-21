// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'plp',
  exposes: {
    './Module': 'apps/plp/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
