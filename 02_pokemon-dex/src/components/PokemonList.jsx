import React from "react";
import MOCK_DATA from "../mock/mock";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #f6f6f6;
  padding: 40px 0;
`;
const GridContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px 20px;
  padding: 40px 0px;
`;
const Span = styled.span`
  font-size: 24px;
  padding-left: 20px;
`;

const PokemonList = ({ collected, collectPokemon, removePokemon }) => {
  const pokemons = MOCK_DATA;
  const navigate = useNavigate();

  return (
    <Container>
      <Span>👆 포켓몬을 골라보세요</Span>
      <GridContainer>
        {pokemons.map((pokemon) => {
          const isCollected = collected.some((p) => p.id === pokemon.id);
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isCollected={isCollected}
              collectPokemon={collectPokemon}
              removePokemon={removePokemon}
              onClick={() => navigate(`/details/${pokemon.id}`)}
            />
          );
        })}
      </GridContainer>
    </Container>
  );
};

export default PokemonList;
