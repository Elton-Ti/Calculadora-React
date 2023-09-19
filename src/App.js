import logo from './logo.svg';
import './App.css';
import Calculator from './main/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Calculator />
        </p>        
      </header>
    </div>
  );
}

export default App;
