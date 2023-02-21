import { Link } from 'react-router-dom';

export function App() {
  return (
    <>
      HEADER
      <ul>
        <li>
          <Link to="/">Product Listing Page</Link>
        </li>
        <li>
          <Link to="/another-page">AnotherPage</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
