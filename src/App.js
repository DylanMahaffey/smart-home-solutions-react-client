import logo from './logo.svg';
import './App.css';

function App() {
  fetch("http://localhost:8080")
  .then(response => response.json())
  .then(json => {
    console.log(json)
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          testing... {process.env.REACT_APP_Testing2}
        </a>
      </header>
    </div>
  );
}

export default App;
