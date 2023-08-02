// eslint-disable-next-line no-async-promise-executor
module.exports = new Promise(async (resolve, reject) => {
  const { importDelegatedModule } = await import(
    '@module-federation/utilities'
  );

  // eslint-disable-next-line no-undef
  const currentRequest = new URLSearchParams(__resourceQuery).get('remote');
  const [global, url] = currentRequest.split('@');

  importDelegatedModule({
    global,
    url,
  })
    .then(async (remote) => {
      resolve(remote);
    })
    .catch((error) => {
      reject(error);
    });
});
