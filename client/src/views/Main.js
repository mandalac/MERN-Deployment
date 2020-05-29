import React, { useEffect, useState } from "react";
import axios from "axios";
import MainPage from "../components/MainPage";
import PlayerList from "../components/PlayerList";

export default () => {
  const [player, setPlayer] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/player").then((res) => {
      setPlayer(res.data);
      setLoaded(true);
    });
  }, []);

  const removeFromDom = (playerId) => {
    setPlayer(player.filter((player) => player._id !== playerId));
  };
  return (
    <>
      <MainPage />
      {loaded && <PlayerList player={player} removeFromDom={removeFromDom} />}
    </>
  );
};
