import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import AddPlayer from "./views/AddPlayer";
import GameOne from "./views/GameOne";
import GameTwo from "./views/GameTwo";
import GameThree from "./views/GameThree";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddPlayer path="/player/add" />
        <GameOne path="/status/game/1" />
        <GameTwo path="/status/game/2" />
        <GameThree path="/status/game/3" />
      </Router>
    </div>
  );
}

export default App;
