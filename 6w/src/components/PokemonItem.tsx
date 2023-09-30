interface PokemonItemProps {
  pokemon: {
    name: string;
    height: string;
    weight: string;
    types: string[];
  };
  index: number;
  onClick: () => void;
}

const PokemonItem = ({ pokemon, index, onClick }: PokemonItemProps) => {
  const { name, height, weight, types } = pokemon;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;

  return (
    <div className="pokemon-item" onClick={onClick}>
      <img src={imageUrl} alt={name} />
      <div className="info-wrapper">
        <h2>{name}</h2>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Types: {types.join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
