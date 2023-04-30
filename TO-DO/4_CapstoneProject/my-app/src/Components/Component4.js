// Check in a book
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
  } catch (error) {
    console.error(error);
  }
};