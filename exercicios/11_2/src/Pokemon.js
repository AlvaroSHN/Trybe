import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Pokemon extends Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    
    return ( 
      <div className="pokemon">
        <div>
        <p className="item">{name}</p>
        <p className="item">{type}</p>
        <p className="item">{averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img className="item" src = {image}/>
      </div>
    )
  }
}
// id: 25,
// name: "Pikachu",
// type: 'Electric',
// averageWeight: {
//   value: 6.0,
//   measurementUnit: "kg"
// },
// image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
// moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"

export default Pokemon;
