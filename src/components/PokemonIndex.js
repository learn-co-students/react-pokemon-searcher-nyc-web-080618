import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import {Search, Button} from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: []
    }
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(pokemonData => {
      this.setState({pokemon: pokemonData})
    })
  }

  search = event => {
    const userInput = event.target.value
    if (userInput === '') {
      this.fetchPokemon()
    }
    const pokemon = this.state.pokemon.filter(pokeObj => pokeObj.name.startsWith(userInput))
    this.setState({pokemon})
  }

  handleNewPokemon = event => {
    const inputs = event.target.getElementsByTagName('input')
    const name = inputs[0].value
    const hp = inputs[1].value
    const frontUrl = inputs[2].value
    const backUrl = inputs[3].value
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats: [
          {
            value: hp,
            name: "hp"
          }
        ],
        sprites: {
          "front": frontUrl,
          "back": backUrl
        }
      })
    }).then(res => res.json()).then(newPokemonObj => {
      this.setState({
        pokemon: [
          ...this.state.pokemon,
          newPokemonObj
        ]
      })
    })
  }

  handleSort = event => {
    const searchType = event.target.name
    let sortedPokemon
    if (searchType === 'name') {
      sortedPokemon = this.state.pokemon.sort((a, b) => {
        if (a[searchType].toLowerCase() < b[searchType].toLowerCase()) {
          return -1
        }
        if (a[searchType].toLowerCase() > b[searchType].toLowerCase()) {
          return 1
        }
        return 0
      })
    } else {
      sortedPokemon = this.state.pokemon.sort((a, b) => {
        return a.stats[a.stats.length - 1].value - b.stats[b.stats.length - 1].value
      })
    }

    this.setState({pokemon: sortedPokemon})
  }

  sortById = () => {
    const pokemon = this.state.pokemon.sort((a, b) => a.id - b.id)
    this.setState({pokemon})
  }

  render() {
    return (<div>
      <h1>Pokemon Searcher</h1>
      <br/>
      <Search onSearchChange={this.search} showNoResults={false}/>
      <Button onClick={this.sortById} name="id">Sort By Id</Button>
      <Button onClick={this.handleSort} name="name">Sort By Name</Button>
      <Button onClick={this.handleSort} name="hp">Sort By HP</Button>
      <br/>
      <PokemonCollection pokemon={this.state.pokemon}/>
      <br/>
      <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
    </div>)
  }
}

export default PokemonPage
