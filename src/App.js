import React, { Component } from 'react';
import catlogo from './catlogo.svg';
import './App.css';
import CatList from "./componets/CatList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={catlogo} className="App-logo" alt="logo" />
          <h1 className="App-title">catbox a place for a pile</h1>
        </header>
        <CatList />
      </div>
    );
  }
}

export default App;
