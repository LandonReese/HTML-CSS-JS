import React, { useState } from 'react';

function CheckInBook() {
  const [bookId, setBookId] = useState('');

  function handleCheckIn(event) {
    event.preventDefault();
    fetch(`http://localhost:5000/books/${bookId}/check-in`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Check In a Book</h2>
      <form onSubmit={handleCheckIn}>
        <label htmlFor="bookId">Book ID:</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={event => setBookId(event.target.value)}
        />
        <button type="submit">Check In</button>
      </form>
    </div>
  );
}

export default CheckInBook;
