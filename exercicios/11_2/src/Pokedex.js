import Pokemon from './Pokemon';
import pokemons from './data'
import React, { Component } from 'react'
import './style.css'

class Pokedex extends Component {
    render() {
      const {id} = pokemons;
        return (
            <div className="pokedex">
                {pokemons.map(pokemon => 
                <Pokemon key={pokemon.id} pokemon={pokemon} />
                )}
            </div>
        );
    }
}

export default Pokedex;