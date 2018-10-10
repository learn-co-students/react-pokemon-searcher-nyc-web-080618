import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      src: props.data.sprites.front
    }
  }
  handleClick = (event) => {
    if (this.state.src === this.props.data.sprites.front) {
      this.setState({
        src: this.props.data.sprites.back
      })
    } else {
      this.setState({
        src: this.props.data.sprites.front
      })
    }
  }
  render() {
    const data = this.props.data
    const hpStat = data.stats.find((obj) => {
      return obj.name === "hp"
    })
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.src} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{data.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpStat.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
