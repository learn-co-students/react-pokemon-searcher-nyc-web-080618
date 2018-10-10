import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokeData:[],
    searchInput:''
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => this.setState({
      pokeData: data
    }))
  }

  handleSearch = (event) => {
    event.persist()
    this.setState({
      searchInput:event.target.value
    })
  }


  render() {
    console.log(this.state.pokeData)
    return (
      <div>
      <h1>Pokemon Searcher</h1>
      <br />
      <Search onSearchChange={this.handleSearch} showNoResults={false} />
      <br />
      <PokemonCollection pokeData={this.state.pokeData}
                        pokeSearch={this.state.searchInput}
      />
      <br />
      <PokemonForm />
      </div>
    )
    }
  }


export default PokemonPage
