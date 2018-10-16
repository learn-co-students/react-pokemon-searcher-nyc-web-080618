// dependencies
import React from 'react'
import _ from 'lodash'

// user files
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'


class PokemonPage extends React.Component {
  // Project Goal #1 - create an index displaying pokemon 'cards'
  // PG#1 - Step 1 -> Set an initial state for all of the pokemon we will be fetching:
  state = {
    pokemon: [],
    // PG#4 - Step 2 -> Set an initial search state that is equal to an empty string
    search: ''
  }

  // PG#1 - Step 2 -> Create a fetch request (w/in componentDidMount) from the server & log the returned JSON data
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemon => {
      // PG#1 - Step 2 -> console.log(pokemon) to verify the correctly returned data
      // PG#1 - Step 3 -> set the new state of our allPokemon array to be equal to the returned JSON request
      // PG#1 - Step 3 -> this.setState({pokemon: pokemon}) -> key referring to the pokemon array is set equal to the returned JSON Promise
      this.setState({pokemon})
      // PG#1 - Step 3 -> console.log("This is state of pokemon", pokemon) to verify updated state
    })
  }

  // Project Goal #4 - allow users to search in order to narrow down the cards shown on the page
  // PG#4 - Step 1 -> create a callback function that will be triggered when a user enters a value into the search field
  handleSearch = (event) => {
    // call event.persist() because we want the entered search value to persist through other page renders
    event.persist()
    this.setState({
      // PG#4 - Step 3 -> after setting an initial search state above, setState the search key to be equal to whatever the user input into the search field
      search: event.target.value
    })
  }


  // PG#5 - Step 6 -> create the callback function that will update the state of the pokemon array to include the newly posted pokemon
  // as an arguement, this function will take in the updatedPokemon JSON object from our POST request & add it to the existing pokemon array state
  updatePokemon = (updatedPokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, updatedPokemon],
    })
  }



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        {/* PG#4 - Step 4 -> make a reference to the callback function created above so that it's triggered whenever a user inputs a value into the search field */}
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        {/* PG#5 - Step 7 -> pass the updatePokemon callback function down into the PokemonForm as a prop so it can be triggered on submit event */}
        {/* Project Goal #5 - Completed -> wire up the form to add a missing pokemon */}
        <PokemonForm updatePokemon={this.updatePokemon}/>
        <br />
        {/* PG#1 - Step 4 -> pass the state of the pokemon array down into the Pokemon Collection */}
        {/* PG#4 - Step 5 -> pass the state of the search down into the PokemonCollection */}
        <PokemonCollection
          pokemon={this.state.pokemon}
          pokeSearch={this.state.search}
        />
      </div>
    )
  }
}

export default PokemonPage
