import React, { Component } from 'react';
import './App.css';
import { PlacesListComponent, PlaceCreateComponent } from './containers/Places';
import { DatesListComponent, DatesCreateComponent } from './containers/Dates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="logo" className="App-logo" />
          <h2>Lunch date</h2>
        </div>

        <DatesCreateComponent />
        <DatesListComponent />

        <hr />

        <PlaceCreateComponent />
        <PlacesListComponent />
      </div>
    );
  }
}

export default App;
