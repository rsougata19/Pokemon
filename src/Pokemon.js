import React, { useEffect, useState } from "react";

function Pokemon() {
  const [pokemonList, SetPokemonList] = useState([]);
  const [selectedPokemo, SetSelectedPokemon] = useState(null);
  const [isSpinnerDisplay, SetIsSpinnerDisplay] = useState(false);

  useEffect(() => {
    SetIsSpinnerDisplay(true)
    const fetchPokemon = async () => {
      const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const pokeData = await pokeResponse.json();
      SetPokemonList(pokeData.results)
      console.log("Pokemon data", pokeData.results);
      SetIsSpinnerDisplay(false)
    };
    fetchPokemon();
  }, []);

  const onPokemonSelect= () => {
    
  }

  return (
    <div>
      {isSpinnerDisplay && <div className="d-flex justify-content-center z-3">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
      <div className="input-group mb-3 w-25">
        <label className="input-group-text mr-2">Pokemon List:</label>
        <select className="form-select" onChange={()=> onPokemonSelect()}>
          <option selected>Select Pokemon</option>
          {pokemonList.map((pokemon,index)=> (
            <option key={index} value={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Pokemon;
