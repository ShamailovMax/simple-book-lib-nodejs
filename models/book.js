const books = [];

// description of Book model (simple case)
module.exports = class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  save() {
    books.push(this);
  }
  static getAll() {
    return books;
  }
};
