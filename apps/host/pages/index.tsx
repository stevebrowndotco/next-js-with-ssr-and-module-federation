import { Suspense } from 'react';

// @ts-expect-error TODO: support types for importing MF
import Header from 'header/index';

// @ts-expect-error TODO: support types for importing MF

import Plp from 'plp/index';

export function Index({ data }) {
  return (
    <div>
      <div className="container border-2 border-slate-500 p-5 m-4">
        <h1 className="text-3xl mb-4">
          Next Micro front-end PoC (Module Federation)
        </h1>
        HOST Micro front-end
        <Suspense>
          <p>Header Micro-frontend:</p>
          <div className="border-2 border-red-500 p-5 mb-4">
            <Header />
          </div>

          <p>PLP Micro-frontend:</p>

          <div className="border-2 border-green-500 mb-4">
            <Plp />
          </div>

          <div className="border-2 border-red-500 p-5">Footer</div>
        </Suspense>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => ({ data }));

  return { props: { data: data.data.title } };
}

export default Index;
