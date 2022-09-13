const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    //Display all Authors
    app.get("/api/authors", AuthorController.showAllAuthors);

    //Display one Author
    app.get("/api/authors/:id", AuthorController.findOneAuthor);

    //Create new Author
    app.post("/api/authors", AuthorController.createOneAuthor);

    //Update one Author
    app.put("/api/authors/:id", AuthorController.updateAuthor);

    //Delete one Author
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};