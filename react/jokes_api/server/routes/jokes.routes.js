const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    //Display all Jokes
    app.get("/api/jokes", JokeController.showAllJokes);

    //Display oneJoke
    app.get("/api/jokes/:id", JokeController.findOneJoke);

    //Create newJoke
    app.post("/api/jokes", JokeController.createOneJoke);

    //Update oneJoke
    app.put("/api/jokes/:id", JokeController.updateJoke);

    //Delete oneJoke
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
};