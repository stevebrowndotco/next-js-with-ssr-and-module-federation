import { PageSeparator } from '@next-9/ui-kit';
import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

const AnotherPage = React.lazy(() => import('another-page/Module'));

const Header = React.lazy(() => import('header/Module'));

const Footer = React.lazy(() => import('footer/Module'));

const Plp = React.lazy(() => import('plp/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <PageSeparator>
        <h1>NEXT PoC</h1>
        <p>
          Includes: Module Federation (Candidate for ESI replacement), SSR
          (TODO), UI kit library, theming support (TODO)
        </p>
      </PageSeparator>
      <PageSeparator>
        <Header />
      </PageSeparator>

      <PageSeparator>
        <Routes>
          <Route path="/" element={<Plp />} />
          <Route path="/another-page" element={<AnotherPage />} />
        </Routes>
      </PageSeparator>
      <PageSeparator>
        <Footer />
      </PageSeparator>
    </React.Suspense>
  );
}

export default App;
