import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state= {
    frontFacing: true
  }

  handleToggle = (event) => {

    if(this.state.frontFacing){
      this.setState({
        frontFacing:false
      })
    } else {
      this.setState({
        frontFacing:true
      })
    }
    console.log(event.target.src)
  }

  // findHp = ()=>{
  //
  //   return this.stats.find((stat)=>{
  //     return stat.name === "hp"
  //   }).value
  // }

  render() {


    return (

      <Card key={this.props.pokeObj.id} >
      <div>
      <div className="image">
      <img alt="something"
          src={this.state.frontFacing ? this.props.pokeObj.sprites.front : this.props.pokeObj.sprites.back}
          onClick={this.handleToggle}
      />
      </div>
      <div className="content">
      <div className="header">{this.props.pokeObj.name}</div>
      </div>
      <div className="extra content">
      <span>
      <i className="icon heartbeat red" />
      {this.findHp()}
      hp
      </span>
      </div>
      </div>
      </Card>
    )
  }

  findHp = () => {
    console.log("POKE OBJ" , this.props.pokeObj.stats)
    if (!!this.props.pokeObj){
      return this.props.pokeObj.stats.find((stat)=>stat.name === "hp").value
    }
  }
}

export default PokemonCard
