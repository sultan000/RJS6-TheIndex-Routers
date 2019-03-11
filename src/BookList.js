import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";
import BookRow from "./BookRow";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.color} ${book.author}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };
  render() {
    const color = this.props.match.params.color;
    let books = this.state.filteredBooks;
    if (color) {
      books = books.filter(book => book.color === color);
    }
    // const bookLists = this.state.filteredBooks.map(book => (
    //   <BookTable key={book.id} book={book} />
    // ));

    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
