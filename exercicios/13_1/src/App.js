import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.fetchDogImg = this.fetchDogImg.bind(this);

    this.state = {
      dog: '',
    };
  }

  componentDidMount() {
    this.fetchDogImg();
  }

  async fetchDogImg() {
    const myFetch = await fetch("https://dog.ceo/api/breeds/image/random")
    const myResponse = await myFetch.json();
    this.setState({ dog: myResponse });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dog.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.dog.message);
    const dogBreed = this.state.dog.message.split('/')[4];
    alert('Raça do cachorro: ' +dogBreed);
  }

  render() {
    if (this.state.dog === '') return (<p>Loading...</p>);
    return (
      <div>
        <h1>Imagens de Cachorros</h1>
        <button onClick={this.fetchDogImg}>Gerar Nova Imagem</button>
        <div>
          <img src={this.state.dog.message} alt="Cachorro" height="250px" width="250px" />
        </div>
      </div>
    );
  }
}

export default App;