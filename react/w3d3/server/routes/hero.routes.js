const heroController = require("../controllers/hero.controller");

module.exports = app => {
    // Create a new hero app.post
    app.post("/api/hero/new", heroController.createHero);

    // Read all heros app.get
    app.get("/api/heros", heroController.findAllHeros);

    // Read one hero app.get
    app.get("/api/hero/:id", heroController.displayHero);

    // Update a hero app.put
    app.put("/api/hero/update/:id", heroController.updateHero);

    // Delete a hero app.delete
    app.delete("/api/hero/delete/:id", heroController.deleteHero);
};

