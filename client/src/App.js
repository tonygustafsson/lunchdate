import React, { Component } from 'react';
import './App.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { PlacesListComponent, PlaceCreateComponent } from './containers/Places';
import { DatesListComponent, DatesCreateComponent } from './containers/Dates';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1 className="pageHeader">Lunch date</h1>

          <DatesCreateComponent />
          <DatesListComponent />

          <PlaceCreateComponent />
          <PlacesListComponent />
      </div>
    );
  }
}

export default App;
