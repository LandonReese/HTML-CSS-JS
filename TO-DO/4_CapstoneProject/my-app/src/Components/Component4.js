// Check in a book
import React, { useState } from "react";

function CheckInBook() {
  const [bookId, setBookId] = useState("");
  const [success, setSuccess] = useState(false);
  const [checkedInBooks, setCheckedInBooks] = useState([]);

  const handleCheckIn = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkedOut: false,
        }),
      });
      const data = await response.json();
      console.log(data);
      
      // Update state to reflect checked-in book
      setCheckedInBooks(prevState => [...prevState, data]);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckIn(bookId);
  };

  return (
    <div>
      <h2>Check In a Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookId">Book ID:</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button type="submit">Check In</button>
      </form>
      {success && <p>Book successfully checked in!</p>}
      {checkedInBooks.length > 0 && (
        <div>
          <h3>Checked-In Books</h3>
          {checkedInBooks.map((book) => (
            <div key={book.id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckInBook;