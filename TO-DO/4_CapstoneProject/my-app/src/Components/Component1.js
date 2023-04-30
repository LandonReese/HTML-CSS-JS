// List Available Books
import React, { useState, useEffect } from "react";

function ListAvailableBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.filter((book) => !book.checkedOut)));
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default ListAvailableBooks;
