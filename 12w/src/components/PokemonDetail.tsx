import { gql, useQuery } from "@apollo/client";

interface PokemonDetailProps {
  id: number;
}

const GET_POKEMON = gql`
  query getPokemon($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      base_experience
      height
      weight
    }
  }
`;

const PokmonDetail = ({ id }: PokemonDetailProps) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id: id + 1 },
  });
  console.log(data);

  return (
    <>
      {!loading ? (
        <>
          <div className="aspect-square overflow-hidden rounded-full border border-solid border-primary">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                id + 1
              }.png`}
              className="object-contain"
              alt={data.pokemon_v2_pokemon[0].name}
            />
          </div>
          <table className="border-primary-light block border-collapse overflow-hidden rounded-lg border border-solid p-4 text-sm">
            <tbody>
              {["name", "height", "weight", "base_experience"].map((stat) => (
                <tr
                  key={stat}
                  className="border-primary-light border-b border-solid"
                >
                  <td className="p-3 font-bold capitalize">{stat}</td>
                  <td className="p-3 text-right text-opacity-30">
                    {data.pokemon_v2_pokemon[0][stat]}
                  </td>
                </tr>
              ))}
              <tr className="border-primary-light border-b border-solid">
                <td className="p-3 font-bold capitalize">Types</td>
                <td className="p-3 text-right text-opacity-30">
                  {data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes
                    .map((type: any) => type.pokemon_v2_type.name)
                    .join(", ")}
                </td>
              </tr>
              {data.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats.map(
                (stat: any) => (
                  <tr
                    className="border-primary-light border-b border-solid"
                    key={stat.pokemon_v2_stat.name}
                  >
                    <td className="p-3 font-bold capitalize">
                      {stat.pokemon_v2_stat.name}
                    </td>
                    <td className="p-3 text-right text-opacity-30">
                      {stat.base_stat}
                    </td>
                  </tr>
                ),
              )}
              <tr>
                <td className="p-3 font-bold capitalize">Abilities</td>
                <td className="p-3 text-right text-opacity-30">
                  {data.pokemon_v2_pokemon[0].pokemon_v2_pokemonabilities
                    .map((ability: any) => ability.pokemon_v2_ability.name)
                    .join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default PokmonDetail;
