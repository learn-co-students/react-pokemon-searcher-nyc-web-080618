import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {


  renderEachPokemon(){
    return this.props.pokemon.map(individualPokemon => {return <PokemonCard key={individualPokemon.id} pokemonObject={individualPokemon}/>})
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <React.Fragment>
          <h1>Hello From Pokemon Collection</h1>
          {this.renderEachPokemon()}
        </React.Fragment>
      </Card.Group>
    )
  }
}

export default PokemonCollection
