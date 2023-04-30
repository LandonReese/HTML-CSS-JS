// Check out a book
import React, { useState } from "react";

function CheckOutBook() {
  const [bookId, setBookId] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkedOut: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Check Out a Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookId">Book ID:</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button type="submit">Check Out</button>
      </form>
      {success && <p>Book successfully checked out!</p>}
    </div>
  );
}

export default CheckOutBook;
