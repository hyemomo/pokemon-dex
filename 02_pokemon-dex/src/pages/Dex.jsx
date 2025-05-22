import React from 'react'
import PokemonList from '../components/PokemonList'
import Dashboard from '../components/Dashboard'

const Dex = ({ collected, collectPokemon, removePokemon }) => {
  return (
    <div>
      <Dashboard collected={collected} />
      <PokemonList
        collected={collected}
        collectPokemon={collectPokemon}
        removePokemon={removePokemon}
      />
    </div>
  );
};
export default Dex
