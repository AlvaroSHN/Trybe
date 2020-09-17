import React, {Component} from 'react'
import NomeForm from './NomeForm'

class Form extends Component {
  constructor() {
    super()

  
    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      
    }
  }

  handleChange({target}) {
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
          <fieldset className="fieldset">
          <NomeForm value={this.state.nome} handleChange={this.handleChange}/>
          <label>
            Nome
            <input name="email" type="text" onChange={this.handleChange}/>
          </label>
        </fieldset>
      </div>
    )
  }
}

export default Form