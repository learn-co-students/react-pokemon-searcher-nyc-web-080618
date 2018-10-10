import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      front: false
    }
  }

  findHP = () => {
    return this.props.pokemonObj.stats.find(stat => {
      return stat.name === 'hp'
    }).value
  }

  handleImage = () => {
    return this.state.front ? this.props.pokemonObj.sprites.front : this.props.pokemonObj.sprites.back
  }

  handleClick = (event) =>{
    this.state.front ? this.setState({front:false}) : this.setState({front:true})
  }

  render() {
    console.log(this.state.front)
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.handleImage()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {this.findHP()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
