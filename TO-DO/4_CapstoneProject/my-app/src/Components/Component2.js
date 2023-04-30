// List Checked out Books
import React, { useState, useEffect } from "react";

function ListUnavailableBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.filter((book) => !book.avail)));
  }, []);

  return (
    <div>
      <h2>Unavailable Books</h2>
      {books.map((book) => (
        <div key={book._id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
          <p>{book.isbn}</p>
          <p>{book.who} has checked out this book and it is due on {book.due}.</p>
        </div>
      ))}
    </div>
  );
}

export default ListUnavailableBooks;
