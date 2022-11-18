// init of express
const express = require("express");
const app = express();
const bookRouter = require("./routes/bookRouter.js");
const homeRouter = require("./routes/homeRouter.js");

// handlebars template connection
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

// routes connection
app.use("/books", bookRouter);
app.use("/", homeRouter);

// 404 case handling
app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

app.listen(3000);
