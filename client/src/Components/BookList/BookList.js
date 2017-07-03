import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem.js';
import './BookList.css';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.updateNewBook = this.updateNewBook.bind(this);
    this.saveNewBook = this.saveNewBook.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      books: [],
      newBookName: ''
    };
  }

  componentDidMount() {
    return fetch('http://localhost:3000/list-books')
            .then((response) => response.json())
            .then((responseJson) => {
                var books = [];

                responseJson.forEach(book => {
                    books.push({
                      'key': book.id,
                      'name': book.name
                    });
                });

                this.setState({
                  books: books
                });
            });
  }

  updateNewBook(e) {
    this.setState({
      newBookName: e.target.value
    });
  }

  removeItem(id) {
    console.log('Will try to remove ' + id);

    fetch('http://localhost:3000/remove-book', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        var books = [];

        responseJson.forEach(book => {
            books.push({
              'key': book.id,
              'name': book.name
            });
        });

        this.setState({
          books: books
        });
    });
  }

  saveNewBook(e) {
    e.preventDefault();
    console.log('Will try to save ' + this.state.newBookName);

    fetch('http://localhost:3000/save-book', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookName: this.state.newBookName
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        var books = [];

        responseJson.forEach(book => {
            books.push({
              'key': book.id,
              'name': book.name
            });
        });

        this.setState({
          books: books
        });
    });
  }

  render() {
    return (
      <div className="BookList">
        <h2>Add new book</h2>

        <form method="post" onSubmit={this.saveNewBook}>
          <input type="text" name="new-book" value={this.state.newBookName} onChange={this.updateNewBook} />
          <input type="submit" value="Save" />
        </form>

        <h2>Let's list somebooks</h2>

        <ul>
          {this.state.books.map((book) => {
              return <BookListItem key={book.key} id={book.key} bookName={book.name} removeMethod={this.removeItem} />
          })}
        </ul>
      </div>
    );
  }
}

export default BookList;
