import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imageSrc: this.props.poke.sprites.front
  }

  handleClick = () => {
    if(this.state.imageSrc === this.props.poke.sprites.front){
      this.setState({
        imageSrc: this.props.poke.sprites.back
      })
    } else {
      this.setState({
        imageSrc: this.props.poke.sprites.front
      })
    }
  }

  renderHp = (poke) => {
    if(poke.stats[5].value){
      return poke.stats[5].value
    } else {
      return 'no Hp'
    }
  }

  render() {
    const {poke} = this.props
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.state.imageSrc} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.renderHp(poke)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
