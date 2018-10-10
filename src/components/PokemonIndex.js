import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon:[],
      filteredPokemon: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemonObject => {
      this.setState({pokemon:pokemonObject,filteredPokemon:pokemonObject})
    })
  }

  filterOnSearchedPokemonArray= (event) => {
    let searchField = event.target.value
      // this.componentDidMount()
    let filteredPokemon = this.state.pokemon.filter(function(individualPokemon){
      return individualPokemon.name.includes(searchField)
    })
    this.setState({filteredPokemon:filteredPokemon})
  }

  addNewPokemon = (object) => {

    this.setState({filteredPokemon:[...this.state.pokemon, object]})
    debugger
  }


  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.filterOnSearchedPokemonArray} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}


export default PokemonPage
