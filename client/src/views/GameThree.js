import React, { useEffect, useState } from "react";
import axios from "axios";
import MainPage from "../components/MainPage";
import { Link } from "@reach/router";

export default () => {
  const [player, setPlayer] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/player").then((res) => {
      setPlayer(res.data);
      setLoaded(true);
    });
  }, [submit]);

  const playing = (playerId) => {
    axios
      .put("http://localhost:8000/api/player/update/" + playerId, {
        gameThree: "playing",
      })
      .then((res) => {
        setSubmit(!submit);
      })
      .catch((err) => console.log(err));
  };

  const notPlaying = (playerId) => {
    axios
      .put("http://localhost:8000/api/player/update/" + playerId, {
        gameThree: "notPlaying",
      })
      .then((res) => {
        setSubmit(!submit);
      })
      .catch((err) => console.log(err));
  };

  const undecided = (playerId) => {
    axios
      .put("http://localhost:8000/api/player/update/" + playerId, {
        gameThree: "undecided",
      })
      .then((res) => {
        setSubmit(!submit);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <MainPage />
      <Link to={"/status/game/1"} className="btn btn-primary col-1">
        Game 1
      </Link>{" "}
      |{" "}
      <Link to={"/status/game/2"} className="btn btn-primary col-1">
        Game 2
      </Link>{" "}
      |{" "}
      <Link to={"/status/game/3"} className="btn btn-primary col-1">
        Game 3
      </Link>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Team Name: </th>
            <th>Action: </th>
          </tr>
        </thead>
        {player.map((player, idx) => {
          return (
            <tr key={idx}>
              <td>{player.playerName}</td>
              <td>
                {player.gameThree == "playing" ? (
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      playing(player._id);
                    }}
                  >
                    Playing
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      playing(player._id);
                    }}
                  >
                    Playing
                  </button>
                )}
                |
                {player.gameThree == "notPlaying" ? (
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      notPlaying(player._id);
                    }}
                  >
                    Not Playing
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      notPlaying(player._id);
                    }}
                  >
                    Not Playing
                  </button>
                )}
                |
                {player.gameThree == "undecided" ? (
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      undecided(player._id);
                    }}
                  >
                    Undecided
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      undecided(player._id);
                    }}
                  >
                    Undecided
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
