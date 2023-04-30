// List Checked out Books
import React, { useState, useEffect } from "react";

function ListCheckedOutBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.filter((book) => book.checkedOut)));
  }, []);

  return (
    <div>
      <h2>Checked-Out Books</h2>
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default ListCheckedOutBooks;
