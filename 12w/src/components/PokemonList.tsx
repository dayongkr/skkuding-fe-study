import PokemonItem from "./PokemonItem";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Pokemon {
  name: string;
  height: string;
  weight: string;
  types: { type: { name: string } }[];
}

interface PokemonListProps {
  setSelectedPokemon: (index: number) => void;
}

const PokemonList = ({ setSelectedPokemon }: PokemonListProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    setPokemons([]);
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res.data.results);
      for (let i = 0; i < res.data.results.length; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((res) => {
          setPokemons((pokemons) => [...pokemons, res.data]);
        });
      }
    });
  }, []);
  return (
    <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
      {pokemons.map((pokemon, index) => (
        <PokemonItem
          key={index}
          pokemon={pokemon}
          index={index}
          onClick={() => {
            setSelectedPokemon(index);
          }}
        />
      ))}
    </div>
  );
};

export default PokemonList;
