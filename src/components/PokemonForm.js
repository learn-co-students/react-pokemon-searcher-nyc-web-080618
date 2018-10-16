import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  // PG#5 - Step 8 -> once the callback has been passed down into the child component then we need to pass it in as props through the constructor & super to initialize 'this'
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''

    }
  }

  // Project Goal #5 - wire up the form to add a missing pokemon
  // PG#5 - Step 1 -> initial state for the PokemonForm has been given above so now we need to get the values users type into the form
  // PG#5 - Step 1 -> the initial <Form onSubmit={this.handleSubmit}> has also been given below - so we must now create that functionality
  handleSubmit = (event) => {
    // we need to pass in the event because that will give us the values from the form
    // PG#5 - Step 2 -> update the state of the form to be equal to the values of the form input
    this.setState({
      name: event.target.name.value,
      hp: event.target.hp.value,
      frontUrl: event.target.frontUrl.value,
      backUrl: event.target.backUrl.value

    // PG#5 - Step 3 -> create a fetch 'POST' request that will add our new Pokemon to the DB
  }, () => {
      fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        headers: {
          'accept':'application/json',
          'content-type':'application/json'
        },
        body:JSON.stringify({
            // PG#5 - Step 4A -> add in the name from the updated state
            "name": this.state.name,
            // PG#5 - Step 4B -> add in the hp from the updated state
            // stats is an array so we need to make this an array
            "stats": [{
                "value": this.state.hp,
                "name": "hp"
              }],
            // PG#5 - Step 4C -> add in the front & back sprites from the updated state
            "sprites": {
              "front": this.state.frontUrl,
              "back": this.state.backUrl
            }
          })
      })
      .then(response => response.json())
      // PG#5 - Step 5 -> once we get our returned JSON data then we need to pass in a callback function to update our state of pokemon
      // PG#5 - Step 5 -> this function will live on PokemonPage
      .then(updatedPokemon => this.props.updatePokemon(updatedPokemon))
     }
   )
   // clear the form inputs after the submission
   event.target.reset()
 }


  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
