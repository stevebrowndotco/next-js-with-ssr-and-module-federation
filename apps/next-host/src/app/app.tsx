import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

const Header = React.lazy(() => import('header/Module'));

const Footer = React.lazy(() => import('footer/Module'));

const Plp = React.lazy(() => import('plp/Module'));

const AnotherPage = React.lazy(() => import('another-page/Module'));

export function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Next PoC</h1>
      <React.Suspense fallback={null}>
        <div className="border-2 border-red-500 p-4 mb-4 relative">
          <div className="text-xs bg-yellow-100 p-2 mb-4 shadow-md w-fit absolute top-0 right-0">
            Header Micro Front-end
          </div>
          <Header />
        </div>

        <div className="border-2 border-red-500 p-4 mb-4 relative">
          <div className="text-xs bg-yellow-100 p-2 mb-4 shadow-md w-fit absolute top-0 right-0">
            Micro front-end routes loaded via SPA react-router
          </div>
          <Routes>
            <Route path="/" element={<Plp />} />
            <Route path="/another-page" element={<AnotherPage />} />
          </Routes>
        </div>

        <div className="border-2 border-red-500 p-4 relative">
          <div className="text-xs bg-yellow-100 p-2 mb-4 shadow-md w-fit absolute top-0 right-0">
            Footer Micro front-end
          </div>
          <Footer />
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
