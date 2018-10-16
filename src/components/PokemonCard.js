// dependencies
import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCard extends React.Component {
  // Project Goal #3 - when clicked, the card should toggle between displaying the front and back pictures
  // PG#3 - Step 1 -> create a constructor / super / state so that we can set the initial state of each card to 'front'
  constructor(props){
    super(props)

    this.state = {
      clicked: false
      // PG#3 - Step 1 -> verify the added state in the React Developer Tools for each PokemonCard
    }
  }

  // PG#3 - Step 2B -> create a callback function to respond to a click event that will flip the image between the front & back
  handleImageFlip = () => {
    // PG#3 - Step 2B -> if the clicked state is false then we will show the front image -> if the clicked state is true then we will show the back
    return !this.state.clicked ? this.props.sprites.front : this.props.sprites.back
  }

  // PG#3 - Step 3B -> create a callback function to respond to a click event that will change the state of 'clicked' to true
  handleClick = (event) => {
    // PG#3 - Step 3B -> if the clicked state is false then we will set the state to true -> if the clicked state is false then we will set it to true
    // Project Goal #3 - Completed -> when clicked, the card should toggle between displaying the front and back pictures
    return !this.state.clicked ? this.setState({clicked:true}) : this.setState({clicked:false})
 }


  render() {
    // PG#1 - Step 5 -> console.log(this.props); verify that the props were passed down from parent (PokemonCollection) correctly
    // Project Goal #1 - Completed -> create an index displaying pokemon 'cards'
    // ---------------------------------------------------------------------------------------------------------------------------
    // Project Goal #2 -> render each pokemon name, picture, and hp in a card
    // PG#2 - Step 3A -> create a variable that points to HP since it's nested & not easily accessed through props
    const hp = this.props.stats.find(stat => stat.name === 'hp').value

    return (
      <Card>
        <div>
          {/* PG#3 - Step 3A -> create an onClick event listener that will toggle the state of the image pertaining to clicked */}
          <div className="image" onClick={this.handleClick}>
            {/* PG#2 - Step 1 -> render each pokemon picture in a card */}
            {/* PG#3 - Step 2A -> refactor the src from 'this.props.sprites.front' to equal our invoked callback function that we will define above */}
            <img src={this.handleImageFlip()} alt="oh no!" />
          </div>
          <div className="content">
            {/* PG#2 - Step 2 -> render each pokemon name in a card */}
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              {/* PG#2 - Step 3B -> render each pokemon hp in a card */}
              {/* Project Goal #2 - Completed -> render each pokemon name, picture, and hp in a card */}
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
