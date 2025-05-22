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
        alert("도감에는 최대 6마리까지만 담을 수 있어요.");
        return [...prev]
      }
      if(duplicateCheck(prev, pokemon.id)){
        alert("중복되는 포켓몬은 담을 수 없어요")
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
