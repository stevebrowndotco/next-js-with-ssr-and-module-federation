import * as path from 'path';
// import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

import { handleRequest } from './src/main.server';

const port = process.env['PORT'] || 4203;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/apps/plp/browser');
const serverDist = path.join(process.cwd(), 'dist/apps/plp/server');
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

// Client-side static bundles
app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

app.get('/products-fragment', (req, res) =>
  fetch(
    'https://www.next.co.uk/products-fragment?criteria=www.next.co.uk%2Fshop%2Fdepartment-homeware-productaffiliation-lighting%2Fcategory-floorlights-isort-price&providerArgs=_br_var_2&start=0&pagesize=60&contextid=uid%3D1643769746642:v%3D13.0:ts%3D1675349244726:hc%3D145&type=Category&fields=items,filters,totalResults,sorting,title,relaxedQuery,includedComponents,searchCategory&segment=core&pageLoadTrigger=FILTER&sliceSize=12&searchTerm=&showSearchProviderRequestUrl=false'
  )
    .then(async (response) => {
      return await response.text();
    })
    .then((data) => {
      res.send(data);
      return data;
    })
    .catch((error) => {
      res.status(500).send('Internal Server Error');
    })
);

app.get('/item-numbers', (req, res) => {
  return fetch(
    'https://ci-test.next.co.uk/api/search/next/gb/en/v1/item-numbers?Criteria=localhost%3A3009%2Fsearch%3Fw%3Dred&Start=0&PageSize=60&Type=Keyword'
  )
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
      return data;
    })
    .catch((error) => {
      res.status(500).send('Internal Server Error');
    });
});

// Static bundles for server-side module federation
app.use(
  '/server',
  express.static(serverDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);

  /**
   * DO NOT REMOVE IF USING @nrwl/react:module-federation-dev-ssr executor
   * to serve your Host application with this Remote application.
   * This message allows Nx to determine when the Remote is ready to be
   * consumed by the Host.
   */
  process.send?.('nx.server.ready');
});

server.on('error', console.error);
