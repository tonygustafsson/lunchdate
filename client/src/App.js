import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList/BookList.js';
import Dates from './Components/Dates/Dates.js';
import Places from './Components/Places/Places.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Dates />

        <hr />

        <Places />

        <BookList />
      </div>
    );
  }
}

export default App;
