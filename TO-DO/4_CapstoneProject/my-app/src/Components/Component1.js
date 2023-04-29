import React, { useState, useEffect } from 'react';

function AvailableBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books/available')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
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

export default AvailableBooks;
