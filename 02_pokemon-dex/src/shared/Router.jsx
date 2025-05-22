import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dex from '../pages/Dex'
import Details from './../pages/Details';

const Router = ({ collected, collectPokemon, removePokemon }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dex"
        element={
          <Dex
            collected={collected}
            collectPokemon={collectPokemon}
            removePokemon={removePokemon}
          />
        }
      />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Router;
