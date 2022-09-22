import logo from './logo.svg';
import './App.css';
import Usuario from './Usuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table border="1">

          <tbody>
            <tr>
              <td width="10%" > <img src={logo} className="App-logo" alt="logo" /></td>
              <td> <Usuario/>


              </td>
            </tr>
          </tbody>
        </table>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eliane Oliota
        </a>
      </header>
    </div>
  );
}

export default App;
