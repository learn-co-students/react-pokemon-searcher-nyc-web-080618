import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isFront: true
    }
  }

  flipCard = event => {
    this.setState({
      isFront: !this.state.isFront
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!"
              src={this.state.isFront ? this.props.sprites.front : this.props.sprites.back}
              onClick={this.flipCard}
               />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[this.props.stats.length - 1].value} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
