import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Journal from "./Journal";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blog Your Own Adventure</h1>
            <Journal/>
        </header>




      </div>
    );
  }
}






export default App;
