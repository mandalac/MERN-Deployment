import React from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";

export default (props) => {
  return (
    <div>
      <p>
        <Link to={"/"} className="btn btn-info col-4">
          Manage Players
        </Link>{" "}
        |{" "}
        <Link to={"/status/game/1"} className="btn btn-info col-4">
          Manage Player Status
        </Link>
      </p>
    </div>
  );
};
