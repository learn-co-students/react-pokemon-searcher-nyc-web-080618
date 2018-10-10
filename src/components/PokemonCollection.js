import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemonArray = this.props.pokemon.map((pokedata) => {
      return <PokemonCard key={pokedata.id} data={pokedata} />
    })
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonArray}
      </Card.Group>
    )
  }
}

export default PokemonCollection
