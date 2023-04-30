// Check out a book
import React, { useState } from "react";

const url = "http://localhost:5000/books";

function CheckOutBook() {
  const [bookId, setBookId] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${url}/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkedOut: true }),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          setError("");
        } else {
          throw new Error("Book not found or already checked out");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <h2>Check Out a Book</h2>
      {error && <p>{error}</p>}
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
