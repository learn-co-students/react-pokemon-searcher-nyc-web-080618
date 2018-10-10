import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      searchTerm: ''
    }
    fetch('http://localhost:3000/pokemon')
    .then( data => data.json())
    .then( response => {
      this.setState({
        pokemon: response
      })
    })
  }
  createPokemon = (pokeObj) => {

    fetch('http://localhost:3000/pokemon',
    {method: "POST",
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokeObj)})
    .then( data => data.json())
    .then( response => this.setState({
      pokemon: [
        ...this.state.pokemon,
        response
      ]
    }))
  }

  render() {
    return (
      <div className="App">
        <PokemonIndex pokemon={this.state.pokemon} createPokemon={this.createPokemon} />
      </div>
    )
  }
}




export default App
