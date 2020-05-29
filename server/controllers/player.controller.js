const { Player } = require("../models/player.models");

module.exports.getAllPlayers = (request, response) => {
  Player.find({})
    .then((player) => response.json(player))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

module.exports.createPlayer = (request, response) => {
  const {
    playerName,
    playerPosition,
    gameOne,
    gameTwo,
    gameThree,
  } = request.body;
  Player.create({
    playerName,
    playerPosition,
    gameOne,
    gameTwo,
    gameThree,
  })
    .then((player) => {
      response.json(player);
    })
    .catch((err) => response.status(400).json(err));
};

module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
    runValidators: true,
    context: "query",
  })
    .then((updatePlayer) => response.json(updatePlayer))
    .catch((err) => response.status(400).json(err));
};
