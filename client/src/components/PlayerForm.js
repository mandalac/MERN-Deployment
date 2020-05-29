import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";

export default (props) => {
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [gameOne, setGameOne] = useState("undecided");
  const [gameTwo, setGameTwo] = useState("undecided");
  const [gameThree, setGameThree] = useState("undecided");
  const [errors, setErrors] = useState({
    playerName: "",
    playerPosition: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrors({
      playerName: "",
      playerPosition: "",
    });
    axios
      .post("http://localhost:8000/api/player/add", {
        playerName,
        playerPosition,
        gameOne,
        gameTwo,
        gameThree,
      })
      .then((res) => navigate("/"))
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <span>{errors.playerName != null ? errors.playerName.message : ""}</span>
      <br />
      <span>
        {errors.playerPosition != null ? errors.playerPosition.message : ""}
      </span>
      <br />
      <div id="form">
        <form onSubmit={onSubmitHandler}>
          <p>
            <label>Player Name: </label>
            <br />
            <input
              type="text"
              className="col-3"
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </p>
          <p>
            <label>Prefered Player Position: </label>
            <br />
            <input
              type="text"
              className="col-3"
              onChange={(e) => setPlayerPosition(e.target.value)}
            />
          </p>
          <input className="btn btn-success col-3" type="submit" />
        </form>
      </div>
    </div>
  );
};
