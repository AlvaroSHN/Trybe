import React, { Component } from 'react'

class NomeForm extends Component {
  render() {
    const {value, handleChange} = this.props

    let error = undefined
    if (value.length > 10) error = "texto gigante!"


    return(
      <label>
        Nome:
        <input 
        name="nome"
        value={value}
        onChange={handleChange}
        maxLength={40}
        required={'required'}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default NomeForm;