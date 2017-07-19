import React from 'react';
import './App.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { DatesListComponent, DatesCreateComponent } from './containers/Dates';
import { UserListComponent, UserEditComponent } from './containers/User';

const App = () => {
    return (
        <div className="app">
            <h1>Lunch date</h1>

            <UserEditComponent />
            <UserListComponent />

            <DatesCreateComponent />
            <DatesListComponent />
        </div>
    );
}

export default App;
