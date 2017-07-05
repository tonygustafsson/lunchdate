import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList/BookList.js';
import Dates from './components/Dates/Dates.js';
import { PlacesListComponent, PlaceCreateComponent } from './containers/Places';

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

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

        <PlaceCreateComponent />
        <PlacesListComponent />

        <hr />

        <BookList />

        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
