import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Player from "./components/Player";
import Players from "./components/Players";

class App extends Component {

  state = { players : [
    {name: 'Misko'},
    {name: 'Bosko'},
  ],
    currentPlayer: ''
  }

  inputChangeHandler = (e) =>{
    this.setState({currentPlayer : e.target.value})
  }

  submitButtonHandler = (e) =>{
    const statePlayers = [...this.state.players];
    statePlayers.push({name : this.state.currentPlayer});
    this.setState({players : statePlayers});
    
    e.preventDefault();
  }

  deletePlayerHandler = (e ,playerIndex) =>{
   
  }

 

  render() {
    return (
      <div className="App">
        <div className="container w-50">
          <InputForm change={this.inputChangeHandler} addPlayer={this.submitButtonHandler}/>
          <Player player={this.state.currentPlayer} deletePlayer={this.deletePlayerHandler}/>
          <Players players={this.state.players}/>
        </div>
      </div>
    );
  }
}

export default App;
