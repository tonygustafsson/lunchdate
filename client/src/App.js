import React from 'react';
import './App.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { DatesListComponent, DatesCreateComponent } from './containers/Dates';

const App = () => {
    return (
        <div className="App">
          <h1 className="pageHeader">Lunch date</h1>

          <DatesCreateComponent />
          <DatesListComponent />
      </div>
    );
}

export default App;
