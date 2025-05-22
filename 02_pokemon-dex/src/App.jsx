import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";

const App = () => {
  const [collected, setCollected] = useState([]);

  const collectPokemon = (pokemon) => {
    if (collected.length >= 6) {
      alert("도감에는 최대 6마리까지만 담을 수 있어요.");
      return;
    }
    if (collected.find((p) => p.id === pokemon.id)) return;
    setCollected((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    setCollected((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <BrowserRouter>
      <Router
        collected={collected}
        collectPokemon={collectPokemon}
        removePokemon={removePokemon}
      />
    </BrowserRouter>
  );
};

export default App;
