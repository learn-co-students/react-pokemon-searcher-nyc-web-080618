import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allPokes: [],
      pokemonList: [],
      searchValue: "",
    }
    this.fetchPoke()
  }

  fetchPoke() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allPokes: data,
          pokemonList: data
        })
      })
  }

  searchPoke = (event) => {
    const updatePokemon = this.state.allPokes.filter((poke) => {
      return poke.name.includes(this.state.searchValue)
    })
    this.setState({
      searchValue: event.target.value,
      pokemonList: updatePokemon
    })
  }

  addPokemon = (newPoke) => {
    console.log(newPoke);
    fetch('http://localhost:3000/pokemon', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(
        newPoke
      )
    }).then(res => res.json())
    .then(data => {
      this.setState({
        allPokes: [...this.state.allPokes, data],
        pokemonList: [...this.state.pokemonList, data]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.searchPoke} value={this.state.searchValue} showNoResults={false} />
        <br />
        <PokemonCollection pokemonData={this.state.pokemonList}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
