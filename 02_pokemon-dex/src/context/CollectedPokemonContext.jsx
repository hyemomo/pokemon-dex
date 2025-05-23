import { createContext, useContext, useState } from "react";

const CollectedPokemonContext = createContext();
export const CollectedPokemonProvider = ({ children }) => {
  const [collected, setCollected] = useState([]);
  const duplicateCheck=(prev,id)=>{
    return prev.some((pokemon)=>pokemon.id==id)


  }
  const collectPokemon = (pokemon) => {
    setCollected((prev) => {
      console.log(prev);
      console.log(pokemon.id);
      if (prev.length >= 6) {
        alert("더 이상 선택할 수 없습니다.");
        return [...prev]
      }
      if(duplicateCheck(prev, pokemon.id)){
        alert("이미 선택된 포켓몬입니다.");
        return [...prev]
      }
      return [...prev, pokemon];
    });
  };

  const removePokemon = (id) => {
    setCollected((prev) => prev.filter((card) => card.id !== id));
  };
  return (
    <CollectedPokemonContext.Provider
      value={{ collected, collectPokemon, removePokemon }}
    >
      {children}
    </CollectedPokemonContext.Provider>
  );
};
export const useCollectedPokemon = () => {
  const context = useContext(CollectedPokemonContext);
  if (!context) {
    throw new Error(
      "useCollectedPokemon must be used within a CollectedPokemonProvider"
    );
  }
  return context;
};
