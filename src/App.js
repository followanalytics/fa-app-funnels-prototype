import React, { Component } from 'react';
import './App.css';
import FunnelsExploration from './modules/funnelsExploration/FunnelsExploration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <FunnelsExploration />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
