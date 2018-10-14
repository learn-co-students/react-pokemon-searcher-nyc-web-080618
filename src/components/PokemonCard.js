import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    isClicked:false
  }
  setImage=()=>{
    this.setState(prev=>({isClicked:!prev.isClicked}))
  }
  render() {
    const hp=this.props.stats.find(s=>s.name==="hp").value
    return (
      <Card onClick={this.setImage}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.isClicked?this.props.sprites.back
              :this.props.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
