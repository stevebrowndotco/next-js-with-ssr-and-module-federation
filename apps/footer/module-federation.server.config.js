// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'footer',
  exposes: {
    './Module': 'apps/footer/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
