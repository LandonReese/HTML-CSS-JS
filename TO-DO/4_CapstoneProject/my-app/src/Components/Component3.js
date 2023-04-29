import React, { useState } from 'react';

function CheckOutBook() {
  const [bookId, setBookId] = useState('');

  function handleCheckOut(event) {
    event.preventDefault();
    fetch(`http://localhost:5000/books/${bookId}/check-out`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Check Out a Book</h2>
      <form onSubmit={handleCheckOut}>
        <label htmlFor="bookId">Book ID:</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={event => setBookId(event.target.value)}
        />
        <button type="submit">Check Out</button>
      </form>
    </div>
  );
}

export default CheckOutBook;
