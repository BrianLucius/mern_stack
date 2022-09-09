const BookController = require("../controllers/book.controller");

module.exports = (app) => {
    //Display all books
    app.get("/api/books", BookController.showAllBooks);

    //Display one book
    app.get("/api/books/:id", BookController.findOneBook);

    //Create new book
    app.post("/api/books", BookController.createOneBook);

    //Update one book
    app.put("/api/books/:id", BookController.updateBook);

    //Delete one book
    app.delete("/api/books/:id", BookController.deleteBook);
};