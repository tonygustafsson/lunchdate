import React, { Component } from 'react';
import './App.css';
import Dates from './components/Dates/Dates.js';
import { PlacesListComponent, PlaceCreateComponent } from './containers/Places';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="logo" className="App-logo" />
          <h2>Lunch date</h2>
        </div>

        <Dates />

        <hr />

        <PlaceCreateComponent />
        <PlacesListComponent />
      </div>
    );
  }
}

export default App;
