import React, { useState, useEffect } from 'react';

function CheckedOutBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books/checked-out')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h2>Checked-Out Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckedOutBooks;
