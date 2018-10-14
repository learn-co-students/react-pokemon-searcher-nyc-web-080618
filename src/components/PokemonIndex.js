import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search,Button } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
   state={
     pokemon:[],
     search:'',
     isClicked:false
   }

   componentDidMount(){
     fetch('http://localhost:3000/pokemon')
     .then(res=>res.json())
     .then(pokemon=>this.setState({pokemon}))
   }

   handleSubmit=(name,hp,frontUrl,backUrl)=>{
     fetch('http://localhost:3000/pokemon',
        {method:"POST",
         headers:{
           "Accept":"application/json",
           "Content-Type":"application/json"
         },
        body:JSON.stringify({name:name,stats:[{value:hp,name:"hp"}],
         sprites:{front:frontUrl,back:backUrl}})})
     .then(res=>res.json())
     .then(pokemon=>this.setState(prev=>({pokemon:[...prev.pokemon,pokemon]})))
   }

   handleSearch=(e,{value})=>{
     this.setState({search:value})
    }

    handleSort=()=>{
      this.setState(prev=>({isClicked:!prev.isClicked}))
    }

  render() {
    let filteredPokemon=this.state.pokemon.filter(p=>p.name.includes(this.state.search))
    this.state.isClicked? filteredPokemon=filteredPokemon.sort((a,b)=>(a.name>b.name)-(a.name<b.name)):null
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <Button onClick={this.handleSort} content='Sort' />
        <PokemonCollection pokemon={filteredPokemon}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default PokemonPage
