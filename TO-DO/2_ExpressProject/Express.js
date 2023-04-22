const express = require('express');
const app = express();
app.use(express.json()); // enable JSON body parsing

// CORS Handler
app.use(function(req, res, next){   
    res.header('Access-Control-Allow-Origin', '*');   
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');   
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');   
    if (req.method === "OPTIONS") 
        res.sendStatus(200);   
    else 
        next(); 
    }
);

// Initialize the inventory of books
let books = [
  {
    id: "1",
    title: "Reactions in REACT",
    author: "Ben Dover",
    publisher: "Random House",
    isbn: "978-3-16-148410-0",
    avail: true,
    who: "",
    due: ""
  },
  {
    id: "2",
    title: "Express-sions",
    author: "Frieda Livery",
    publisher: "Chaotic House",
    isbn: "978-3-16-148410-2",
    avail: true,
    who: "",
    due: ""
  },
  {
    id: "3",
    title: "Restful REST",
    author: "Al Gorithm",
    publisher: "ACM",
    isbn: "978-3-16-143310-1",
    avail: true,
    who: "",
    due: ""
  },
  {
    id: "4",
    title: "See Essess",
    author: "Anna Log",
    publisher: "O'Reilly",
    isbn: "987-6-54-148220-1",
    avail: false,
    who: "Homer",
    due: "1/1/23"
  },
  {
    id: "5",
    title: "Scripting in JS",
    author: "Dee Gital",
    publisher: "IEEE",
    isbn: "987-6-54-321123-1",
    avail: false,
    who: "Marge",
    due: "1/2/23"
  },
  {
    id: "6",
    title: "Be An HTML Hero",
    author: "Jen Neric",
    publisher: "Coders-R-Us",
    isbn: "987-6-54-321123-2",
    avail: false,
    who: "Lisa",
    due: "1/3/23"
  }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a specific book by ID
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(book => book.id === id);
  //GET /books?avail=true
  if (book) {
    res.json(book);
  //GET /books?avail=false
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// POST a new book
// POST /books
app.post('/books', (req, res) => {
  const book = req.body;
  book.id = (books.length + 1).toString();
  book.avail = true;
  book.who = "";
  book.due = "";
  books.push(book);
  res.status(201).json(book);
});

// PUT update a book by ID
// PUT /books/:id
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  let book = books.find(book => book.id === id);
  if (book) {
    book.title = req.body.title;
    book.author = req.body.author;
    book.publisher = req.body.publisher;
    book.isbn = req.body.isbn;
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// DELETE a book by ID
// DELETE /books/:id
app.delete('/books/:id', (req, res) => {
    const bookIndex = inventory.findIndex(book => book.id === req.params.id);
    if (bookIndex !== -1) {
      inventory.splice(bookIndex, 1);
      res.status(200).send('Book deleted');
    } else {
      res.status(204).send();
    }
});
// Start server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));