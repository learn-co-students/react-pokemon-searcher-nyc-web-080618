import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import {
  Search
} from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    filterPokemon: [],
    searchBy: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => this.setState({
        allPokemon: data
      }))
  }

  handleSearch = (event) => {
    this.setState({
      searchBy: event.target.value
    })
  }

  filterPokemon = () =>{
    return this.state.allPokemon.filter(pokemon => {
       return pokemon.name.includes(this.state.searchBy)
     })
  }

  updatePokemon = (data) => {
    this.setState({
      allPokemon: [...this.state.allPokemon,data],
      filterPokemon: []
    })
  }

  render() {
    console.log(this.state)
    // console.log(this.state) //render will log any time state changes. will log twice 1. empty array 2. will run again after fetch
    return ( <div >
      <h1 > Pokemon Searcher < /h1> <br / >
      <input type = "search" name = "p" value = {this.state.searchBy}
      onChange = {event => this.handleSearch(event)}/> <br / >
      <PokemonCollection allPokemon = {
        this.filterPokemon()
      }/> <br / >
      <PokemonForm updatePokemon={this.updatePokemon}/ >
      </div>
    )
  }
}

export default PokemonPage
