import React,{ useState } from 'react'

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1300")
            .then((response) => {return response.json()})
            // .then((response) => {console.log(response.results)})
            .then((response) => {setPokemonList(response.results)})
            .catch((err) => {"There was an error"});
    }

  return (
    <div>

    <div>PokemonAPI</div>
    <button onClick={fetchPokemon}>Get all Pokemon</button>
        <div>
            <ul style={{display: "inline-block"}}>
            {
                pokemonList.map((pokemon, index) => {return (
                    <li style={{"textAlign": "left"}} key={index}>{pokemon.name}</li>    
                    )})}
            </ul>
        </div>
    </div>
  );
}

export default PokemonAPI