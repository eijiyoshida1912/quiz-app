import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/name">name</Link>
          </li>
          <li>
            <Link to="/participation">participation</Link>
          </li>
          <li>
            <Link to="/quiz">quiz</Link>
          </li>
          <li>
            <Link to="/result">result</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
