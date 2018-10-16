// dependencies
import React from 'react'
import { Card } from 'semantic-ui-react'

// user files
import PokemonCard from './PokemonCard'

// refactored this into a Functional Component since it has no need for state
const PokemonCollection = (props) => {

    // PG#1 - Step 4 -> console.log(props) functional component so no 'this'; verify that the props were passed correctly
    // PG#1 - Step 5A -> create a variable that will render an individual card from each pokemon object in the pokemon array
    const singlePokemon = props.pokemon.map((poke, index) => {
      // PG#4 - Step 6 -> add an if statement to only render those pokemon who's name is included in the user's inputted search
      // Project Goal #4 - Completed -> allow users to search in order to narrow down the cards shown on the page
      if(poke.name.includes(props.pokeSearch)){
      // PG#1 - Step 5A -> remember to set a unique key
      return <PokemonCard key={index}{...poke} />
    }
    })


    return (
      <Card.Group itemsPerRow={6}>
        {/* PG#1 - Step 5B -> pass in the singlePokemon variable created above */}
        {singlePokemon}
      </Card.Group>
    )
  }


export default PokemonCollection
