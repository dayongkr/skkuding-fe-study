import "./App.css";
import Nav from "./components/Nav";
import PokmonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import { useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(-1);
  return (
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
  );
}

export default App;
