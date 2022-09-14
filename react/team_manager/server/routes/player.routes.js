const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
    //Display all Players
    app.get("/api/players", PlayerController.showAllPlayers);

    //Display one Player
    app.get("/api/players/:id", PlayerController.findOnePlayer);

    //Create new Player
    app.post("/api/players", PlayerController.createOnePlayer);

    //Update one Player
    app.put("/api/players/:id", PlayerController.updatePlayer);

    //Delete one Player
    app.delete("/api/players/:id", PlayerController.deletePlayer);
};