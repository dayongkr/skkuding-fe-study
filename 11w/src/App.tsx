import "./App.css";
import Nav from "./components/Nav";
import PokmonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(-1);
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav
          onClick={() => {
            setSelectedPokemon(-1);
          }}
        />
        <main>
          {selectedPokemon === -1 ? (
            <PokemonList setSelectedPokemon={setSelectedPokemon} />
          ) : (
            <PokmonDetail id={selectedPokemon} />
          )}
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
