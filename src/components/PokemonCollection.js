import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
      return (
        <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.pokeData.map((pokeObj)=>{
          if(pokeObj.name.includes(this.props.pokeSearch)){
            return <PokemonCard pokeObj={pokeObj}/>
          }
        })}
        </Card.Group>
      )

  }
}

export default PokemonCollection
