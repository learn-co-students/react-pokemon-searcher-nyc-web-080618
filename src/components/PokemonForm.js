import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      sprites: {
        front: '',
        back: ''
      },
      "stats": [
        {
          "value": 100,
          "name": "speed"
        },
        {
          "value": 100,
          "name": "special-defense"
        },
        {
          "value": 100,
          "name": "special-attack"
        },
        {
          "value": 100,
          "name": "defense"
        },
        {
          "value": 100,
          "name": "attack"
        },
        {
          "value": 100,
          "name": "hp"
        }
      ]
    }
  }

  handleInput = (e) => {
    if(e.target.name === 'frontUrl'){
      this.setState({
        sprites: {
          ...this.state.sprites,
          front: e.target.value,
        },
      })
    } else if (e.target.name === 'backUrl') {
      this.setState({
        sprites: {
          ...this.state.sprites,
          back: e.target.value,
        },
      })
    } else {
      this.setState({
        [e.target.name]:e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleInput} value={this.state.name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleInput} value={this.state.hp} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleInput} value={this.state.frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleInput} value={this.state.backUrl} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
