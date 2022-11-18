const express = require("express");
const bookController = require("../controllers/bookController.js");
const bookRouter = express.Router();

bookRouter.use("/postbook", bookController.postBook);
bookRouter.use("/create", bookController.addBook);
bookRouter.use("/", bookController.getBooks);

module.exports = bookRouter;