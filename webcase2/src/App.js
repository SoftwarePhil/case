import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header-div">
          <h1>State Your Case</h1>
        </div>
      </header>
      <div>
        <ul id="nav">
          <li><a href="#">Resources</a></li>
          <li><a href="#">Survey</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div id="survey">
        <p>Hello, tell us a bit about yourself</p>
        
      </div>
    </div>
  );
}

export default App;
