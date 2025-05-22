import styled from "styled-components";
import { useCollectedPokemon } from "../context/CollectedPokemonContext";

const CardContainer = styled.div`
  background-color: ${(props) =>
    props.variant === "remove" ? "#e0f3fe" : "#f8f8f8"};
  &:hover {
    background-color: ${(props) =>
      props.variant === "remove" ? "#b2cad7" : "#cdcdcd"};
  }
  padding: 16px;
  min-width: 150px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const Type = styled.div`
  display: inline-block;
  background-color: #76a5af;
  color: white;
  border-radius: 12px;
  padding: 4px 10px;
  margin-bottom: 8px;
  font-size: 0.8rem;
`;

const Name = styled.h2`
  font-size: 1.4rem;
  margin: 8px 0;
  color: #333;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 12px 0;
`;

const AddButton = styled.button`
  background-color: ${(props) =>
    props.variant === "remove" ? "#C20000" : "#4CAF50"};
  &:hover {
    background-color: ${(props) =>
      props.variant === "remove" ? "#a30000" : "#3e9443"};
  }
  color: white;
  padding: 6px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
const PokemonCard = ({ pokemon, isCollected, onClick }) => {
  console.log(onClick);
  const { removePokemon, collectPokemon } = useCollectedPokemon();
  const handleClick = (e) => {
    e.stopPropagation();
    isCollected ? removePokemon(pokemon.id) : collectPokemon(pokemon);
  };

  return (
    <CardContainer onClick={onClick} variant={isCollected ? "remove" : "add"}>
      <Type>{pokemon.types}</Type>
      <Name>{pokemon.korean_name}</Name>
      <Image src={pokemon.img_url}></Image>
      <AddButton variant={isCollected ? "remove" : "add"} onClick={handleClick}>
        {isCollected ? "삭제" : "추가"}
      </AddButton>
    </CardContainer>
  );
};

export default PokemonCard;
