import * as path from 'path';
import express from 'express';
import cors from 'cors';
import 'cross-fetch/polyfill';

import { handleRequest } from './src/main.server';

const port = process.env['PORT'] || 4200;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/apps/next-host/browser');
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

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

app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

server.on('error', console.error);
