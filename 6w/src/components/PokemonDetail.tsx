import { pokemons } from "../data";
interface PokemonDetailProps {
  id: number;
}
const PokmonDetail = ({ id }: PokemonDetailProps) => {
  const pokemon = pokemons[id];
  return (
    <>
      <div className="img-wrapper">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            id + 1
          }.png`}
          alt={pokemon.name}
        />
      </div>
      <table>
        <tbody>
          {Object.entries(pokemon).map(([key, value]) => {
            if (value instanceof Array) value = value.join(", ");
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default PokmonDetail;
