const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator");

const PlayerSchema = new mongoose.Schema(
  {
    playerName: {
      type: String,
      required: [true, "The Name is required"],
      minlength: [3, "Name should be at least 3 characters long."],
      unique: [true, "That player already exists."],
    },
    playerPosition: {
      type: String,
      required: [true, "The Position is required"],
      minlength: [3, "Position should be at least 3 characters long"],
    },
    gameOne: {
      type: String,
      default: "undecided",
    },
    gameTwo: {
      type: String,
      default: "undecided",
    },
    gameThree: {
      type: String,
      default: "undecided",
    },
  },
  { timestamps: true }
);

PlayerSchema.plugin(uniqueValidator);
module.exports.Player = mongoose.model("Player", PlayerSchema);
