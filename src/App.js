import logo from './mc_logo_no_text.jpg';
import './App.css';
import { ApiFetch } from './components/ApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below URL and be the one of us.
        </p>
        <a
          className="App-link"
          href="https://mothercomputer.co.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Mother Computer!
        </a>
        <h1>
          This is your Birth Stone!
        </h1>
        <p>
          <ApiFetch />
        </p>
      </header>
    </div>
  );
}

export default App;
