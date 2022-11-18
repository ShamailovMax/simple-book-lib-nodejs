const Book = require("../models/book.js");

exports.addBook = function (request, response) {
  response.render("create.hbs");
};

exports.getBooks = function (request, response) {
  response.render("books.hbs", {
    books: Book.getAll(),
  });
};

exports.postBook = (request, response) => {
  const bookTitle = request.body.title;
  const bookAuthor = request.body.author;
  const book = new Book(bookTitle, bookAuthor);
  book.save();
  response.redirect("/books");
};