import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorDetail from "./AuthorDetail";
class BookRow extends Component {
  render() {
    const book = this.props.book;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {book.authors.map(author => (
            <Link to={`/authors/${author.id}`}>
              <div key={author.id}>{author.name}</div>
            </Link>
          ))}
        </td>
        <td>
          <Link to={`/books/${book.color}`}>
            <button className="btn" style={{ backgroundColor: book.color }} />
          </Link>
        </td>
      </tr>
    );
  }
}

export default BookRow;
