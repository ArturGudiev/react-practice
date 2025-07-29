import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Component2 from './Tickets/Component2';
import Component3 from './Tickets/Component3';
import Component1 from './Component1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a styles="margin-bottom: 2rem"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      <Router>
        <Routes>
          <Route path="/1" element={<Component1/>} />
          <Route path="/2" element={<Component2/>} />
          <Route path="/3" element={<Component3/>} />
          <Route path="*" element={<div > Not found </div>} />
        </Routes>
      </Router>
      </header>
  
    </div>
  );
}

export default App;
