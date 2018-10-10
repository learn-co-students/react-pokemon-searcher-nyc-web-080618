import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleSubmit = (event) => {
    this.props.createPokemon({
      name: this.state.name,
      stats: [
        {
        name: "hp",
        value: this.state.hp
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    })
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.onChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input onChange={this.onChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input onChange={this.onChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input onChange={this.onChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
