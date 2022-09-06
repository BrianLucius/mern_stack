import React,{ useState } from 'react'
import axios from 'axios'

const PokemonAPI = () => {
    const [apiResults, setApiResults] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1300")
            //.then((response) => {console.log(response)})
            .then((response) => {
                setApiResults(response);
                setPokemonList(response.data.results);
            })
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