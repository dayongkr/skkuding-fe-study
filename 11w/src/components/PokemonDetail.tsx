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
          <div className="img-wrapper">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                id + 1
              }.png`}
              alt={data.pokemon_v2_pokemon[0].name}
            />
          </div>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{data.pokemon_v2_pokemon[0].name}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{data.pokemon_v2_pokemon[0].height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{data.pokemon_v2_pokemon[0].weight}</td>
              </tr>
              <tr>
                <td>Types</td>
                <td>
                  {data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes
                    .map((type: any) => type.pokemon_v2_type.name)
                    .join(", ")}
                </td>
              </tr>
              <tr>
                <td>Base Experience</td>
                <td>{data.pokemon_v2_pokemon[0].base_experience}</td>
              </tr>
              {data.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats.map(
                (stat: any) => (
                  <tr key={stat.pokemon_v2_stat.name}>
                    <td>{stat.pokemon_v2_stat.name}</td>
                    <td>{stat.base_stat}</td>
                  </tr>
                )
              )}
              <tr>
                <td>Abilities</td>
                <td>
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
