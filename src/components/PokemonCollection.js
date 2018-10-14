import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const cards=this.props.pokemon.map((pokemon,idx)=>{
      return <PokemonCard key={idx} {...pokemon} />
      })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {cards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
