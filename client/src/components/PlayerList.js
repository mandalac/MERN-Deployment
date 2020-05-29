import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";

export default (props) => {
  const { removeFromDom } = props;
  const deletePlayer = (playerId) => {
    axios
      .delete("http://localhost:8000/api/player/delete/" + playerId)
      .then((res) => {
        removeFromDom(playerId);
      });
  };
  return (
    <div>
      <p>
        <Link to={`/`} className="btn btn-secondary col-2">
          List
        </Link>{" "}
        |{" "}
        <Link to={`/player/add`} className="btn btn-secondary col-2">
          Add Player
        </Link>
      </p>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Team Name: </th>
            <th>Preferd Position: </th>
            <th>Actions: </th>
          </tr>
        </thead>
        {props.player.map((player, idx) => {
          return (
            <tbody>
              <tr key={idx}>
                <td>{player.playerName}</td>
                <td>{player.playerPosition}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      deletePlayer(player._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
