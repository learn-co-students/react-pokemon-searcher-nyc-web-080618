import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {currentURL:this.props.pokemonObject.sprites.front}
  }

  findHPField(array){
    return array.find(element => {
      return element.name === "hp"
    }).value
  }

  toggleSprite = () => {
    if(this.state.currentURL === this.props.pokemonObject.sprites.front){
      this.setState({currentURL:this.props.pokemonObject.sprites.back})
    } else {
      this.setState({currentURL:this.props.pokemonObject.sprites.front})
    }
  }


  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.toggleSprite} src={this.state.currentURL} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObject.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />

              {this.findHPField(this.props.pokemonObject.stats)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
