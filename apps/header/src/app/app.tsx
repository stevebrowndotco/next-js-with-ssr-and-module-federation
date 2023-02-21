import { Link } from 'react-router-dom';
import { Nav } from './styles';

export function App() {
  return (
    <Nav>
      <li className="bg-red-500">
        <Link to="/">Home (PLP)</Link>
      </li>

      <li>
        <Link to="/another-page">AnotherPage</Link>
      </li>
    </Nav>
  );
}

export default App;
