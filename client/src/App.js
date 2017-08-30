import React from 'react';
import './App.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { DatesListComponent, DatesCreateComponent } from './containers/Dates';
import { UserListComponent, UserEditComponent } from './containers/User';
import { CalendarListComponent, CalendarEditComponent } from './containers/Calendar';
import { HeaderComponent } from './containers/Header';

const App = () => {
    return (
        <div className="app">
            <HeaderComponent />

            <div className="site-settings-menu">
                <UserEditComponent />
                <UserListComponent />

                <CalendarEditComponent />
                <CalendarListComponent />
            </div>

            <DatesCreateComponent />
            <DatesListComponent />
        </div>
    );
}

export default App;
