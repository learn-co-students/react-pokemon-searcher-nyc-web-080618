import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

pokeRender = () => {
  return (this.props.pokemonData.map(poke => {
    return <PokemonCard key={poke.id} poke={poke}/>
  }))
}

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.pokeRender()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
