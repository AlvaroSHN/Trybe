import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)  
    this.state = { pokeNumber : 0 }    
  }

  handleClick = () => {
    const pokemonLength = this.props.pokemons.length - 2;    
    this.setState((prevStage, _props) => ({
      pokeNumber : prevStage.pokeNumber + 1
    }))
    if (this.state.pokeNumber > pokemonLength) this.setState({pokeNumber: 0})
  }

  render() {   
    return (
      <div className="pokedex">
      {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
        <Pokemon key={this.props.pokemons[this.state.pokeNumber].id} pokemon={this.props.pokemons[this.state.pokeNumber]} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Pokedex;