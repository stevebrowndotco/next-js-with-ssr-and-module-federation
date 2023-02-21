// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'next-host',
  remotes: ['header', 'footer', 'plp', 'another-page'],
};

module.exports = moduleFederationConfig;
