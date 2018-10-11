import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search, Button} from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(){
    super();

    this.state = {
      allPokemon: [],
      poke: []
    }
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokeData => this.setState({
      allPokemon: [...pokeData],
      poke: [...pokeData]
    }))
  }

  search = (event) => {
    if (event.target.value === ""){
      const pokemons = [...this.state.allPokemon]
      this.setState({poke: pokemons})
    } else {
      const pokemons = this.state.allPokemon.filter(pokemon => pokemon.name.startsWith(event.target.value))
      this.setState({poke: pokemons})
    }
  }

  sortById = (event) => {
    const pokemons = this.state.poke.sort((poke1, poke2) => poke1.id - poke2.id)
    this.setState({poke: pokemons})
  }

  handleSort = (event) => {
    if (event.target.name === "name"){
      const pokemons = this.state.poke.sort((poke1, poke2) => ('' + poke1.name).localeCompare(poke2.name))
      this.setState({poke: pokemons})
    } else if (event.target.name === "hp"){
      const pokemons = this.state.poke.sort((poke1, poke2) => poke1.stats[5].value - poke2.stats[5].value)
      this.setState({poke: pokemons})
    }
  }

  handleNewPokemon = (event) => {
    const inputs = event.target.getElementsByTagName('input');
    const name = inputs[0].value;
    const hp = Number(inputs[1].value);
    const front = inputs[2].value;
    const back = inputs[3].value;

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
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
          front: front,
          back: back
        }
      })
    }).then(response => response.json())
    .then(newPoke => this.setState({
      allPokemon: [...this.state.allPokemon, newPoke],
      poke: [...this.state.poke, newPoke]
    }))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.search} showNoResults={false} />
        <br />
        <Button onClick={this.sortById} name="id">Sort By Id</Button>
        <Button onClick={this.handleSort} name="name">Sort By Name</Button>
        <Button onClick={this.handleSort} name="hp">Sort By HP</Button>
        <br />
        <br />
        <PokemonCollection pokemon={this.state.poke}/>
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
