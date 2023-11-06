import { Pokemon } from "./PokemonList";

interface PokemonItemProps {
  pokemon: Pokemon;
  index: number;
  onClick: () => void;
}

const PokemonItem = ({ pokemon, index, onClick }: PokemonItemProps) => {
  const { name, height, weight, types } = pokemon;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;

  return (
    <div
      className="flex cursor-pointer items-center gap-4 rounded-xl border border-solid border-primary border-opacity-30 p-4 no-underline duration-100 ease-in-out hover:border-opacity-100"
      onClick={onClick}
    >
      <img src={imageUrl} alt={name} className="h-16 w-16" />
      <div className="flex flex-col gap-1">
        <h2 className="mb-1 font-medium capitalize">{name}</h2>
        <p className="text-sm font-light opacity-80">Height: {height}</p>
        <p className="text-sm font-light opacity-80">Weight: {weight}</p>
        <p className="text-sm font-light opacity-80">
          Types: {types.map((type) => type.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonItem;
