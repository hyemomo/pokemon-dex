import React from "react";
import styled from "styled-components";
import { useCollectedPokemon } from '../context/CollectedPokemonContext';
import PokemonCard from './PokemonCard';

const Container = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
  background-color: #ededed;
  padding: 0;
  text-align: center;


`;
const Title = styled.h1`
  font-size:32px;
`
const Cards = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-bottom: 2rem;
  gap: 10px 20px;
overflow-x: scroll;
`;



const Dashboard = () => {

  const {collected} = useCollectedPokemon();
console.log(collected)

  return (
    <Container>
      <Title>혜민이의 포켓몬 도감</Title>
      <Cards>
        {collected.map((pokemon) => {
          return <PokemonCard isCollected   key={pokemon.id} pokemon={pokemon}></PokemonCard>;
        })}
      </Cards>
    </Container>
  );
};

export default Dashboard;
