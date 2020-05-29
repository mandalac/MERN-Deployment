const PlayerController = require("../controllers/player.controller");

module.exports = function (app) {
  app.get("/api/player", PlayerController.getAllPlayers);
  app.delete("/api/player/delete/:id", PlayerController.deletePlayer);
  app.post("/api/player/add", PlayerController.createPlayer);
  app.put("/api/player/update/:id", PlayerController.updatePlayer);
};
