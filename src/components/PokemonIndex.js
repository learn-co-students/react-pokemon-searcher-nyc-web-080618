import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  display = () => {
    return this.props.pokemon.filter((poke) => {
      return poke.name.includes(this.state.searchTerm)
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleChange} showNoResults={false} value={this.state.searchTerm} />
        <br />
        <PokemonCollection pokemon={this.display()}/>
        <br />
        <PokemonForm createPokemon={this.props.createPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
