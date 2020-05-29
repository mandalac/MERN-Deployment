import React from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";
export default (props) => {
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
    </div>
  );
};
