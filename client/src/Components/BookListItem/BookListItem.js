import React, { Component } from 'react';
import './BookListItem.css';

class BookListItem extends Component {
  constructor(props) {
    super(props);

    this.saveBook = this.saveBook.bind(this);

    this.state = {
        bookName: this.props.bookName,
        editMode: false,
        newBookName: this.props.bookName
    };
  }

  componentDidMount() {

  }

  saveBook(e) {
    e.preventDefault();
    console.log('Will try to edit ' + this.props.id);

    this.setState({ editMode: !this.state.editMode });

    fetch('http://localhost:3000/edit-book', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.id,
        bookName: this.state.newBookName
      })
    })
    .then((response) => {
        this.setState({
          bookName: this.state.newBookName
        });
    });
  }

  render() {
    return (
      <li>
        { this.state.editMode &&
            <span>
                <input type="text" value={this.state.newBookName} onChange={(e) => { this.setState({ newBookName: e.target.value }) }} />
            </span>
        }

        { !this.state.editMode &&
            <span>{this.state.bookName}</span>
        }

        <a onClick={() => this.props.removeMethod(this.props.id)}> [del]</a>

        { !this.state.editMode &&
            <a onClick={() => this.setState({ editMode: !this.state.editMode })}> [edit]</a>
        }

        { this.state.editMode &&
            <a onClick={this.saveBook}> [save]</a>
        }
      </li>
    );
  }
}

export default BookListItem;
