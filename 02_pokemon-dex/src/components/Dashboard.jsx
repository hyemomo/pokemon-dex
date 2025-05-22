import React from "react";
import styled from "styled-components";
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
`;


const Dashboard = ({ collected }) => {
  return (
    <Container>
      <Title>혜민이의 포켓몬 도감</Title>
      <Cards>
        {collected.map((pokemon) => (
          <PokemonCard isCollected key={pokemon.id} pokemon={pokemon} />
        ))}
      </Cards>
    </Container>
  );
};
export default Dashboard;
