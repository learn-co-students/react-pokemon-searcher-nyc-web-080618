import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props){
    super(props)
  }

  handleIteration = () =>{
    //this function is creating PokemonCard components 150x
    return this.props.allPokemon.map(pokemon => {
      return <PokemonCard key={pokemon.id} pokemonObj={pokemon}/>}
    )
  }

  render() {
    // console.log(this.props)  //all Pokemon array
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.handleIteration()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
