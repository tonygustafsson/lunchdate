import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList/BookList.js';
import Dates from './components/Dates/Dates.js';
import { PlacesListComponent, PlaceCreateComponent } from './containers/Places';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Dates />

        <hr />

        <PlaceCreateComponent />
        <PlacesListComponent />

        <hr />

        <BookList />
      </div>
    );
  }
}

export default App;
