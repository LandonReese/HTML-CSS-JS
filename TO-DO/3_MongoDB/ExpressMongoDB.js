// run server with:
// npm run dev
// Stop server at any time with: control + C

const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

// TO CONNECT TO THE SERVER RUN THESE COMMANDS
// mongod
// mongo mongodb://localhost:3000

// mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const uri = 'mongodb+srv://landonjreese:5gVU19oOpyD4yOkB@cluster1.7eldpr6.mongodb.net/?retryWrites=true&w=majority';
// const uro = 'mongodb+srv://landonjreese:5gVU19oOpyD4yOkB@cluster1.7eldpr6.mongodb.net/test';
mongoose.connect('mongodb://localhost/myapp', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});

app.use(express.json()); // enable JSON body parsing

// Initialize a way to store each book through MongoDB
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    isbn: String,
    avail: Boolean,
    who: String,
    due: String
});

// Instead of let books = [];
// Use MongoDB model for Books
const Book = mongoose.model('Book', bookSchema);

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

// GET all books
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET a specific book by ID
app.get('/books/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
});

// POST a new book
// POST /books
app.post('/books', async (req, res) => {
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      res.status(500).send(error);
    }
});
  

// PUT update a book by ID
// PUT /books/:id
app.put('/books/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
});

// DELETE a book by ID
// DELETE /books/:id
app.delete('/books/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Book.findByIdAndDelete(id);
      if (result) {
        res.status(200).send('Book deleted');
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
});
// Start server on port 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

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

// Put all initialized books into MongoDB
// Problem not being ASYNCH Currently
// for (let bookData of books) {
//     const book = new Book(bookData);
//     await book.save();
// }

async function saveBooks(books) {
  for (let bookData of books) {
      const book = new Book(bookData);
      await book.save();
  }
}

// Put all initialized books into MongoDB
saveBooks(books)