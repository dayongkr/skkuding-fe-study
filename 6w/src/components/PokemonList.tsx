import PokemonItem from "./PokemonItem";
import { pokemons } from "../data";

interface PokemonListProps {
  setSelectedPokemon: (pokemon: any) => void;
}

const PokemonList = ({ setSelectedPokemon }: PokemonListProps) => {
  return (
    <div id="pokemon-list">
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
