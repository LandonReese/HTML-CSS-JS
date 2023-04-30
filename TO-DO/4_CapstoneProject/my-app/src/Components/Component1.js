// List Available Books
import React, { useState, useEffect } from "react";

function ListAvailableBooks() {
  const [books, setBooks] = useState([]);

  const loadAllBooks = () => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.filter((book) => !book.checkedOut));
      });
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      <pre>{JSON.stringify(books, null, 2)}</pre>
      <button onClick={loadAllBooks}>Load All Books</button>
    </div>
  );
}

export default ListAvailableBooks;
