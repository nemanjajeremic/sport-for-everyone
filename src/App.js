import React, { Component } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Player from "./components/Player";
import Players from "./components/Players";

class App extends Component {
  state = {
    players: [{ name: "Misko" }, { name: "Bosko" }],
    currentPlayer: ""
  };

  inputChangeHandler = e => {
    this.setState({ currentPlayer: e.target.value });
  };

  submitButtonHandler = e => {
    const statePlayers = [...this.state.players];
    statePlayers.push({ name: this.state.currentPlayer });
    this.setState({ players: statePlayers });
    this.setState({ currentPlayer: "" });

    e.preventDefault();
  };

  deletePlayerHandler = index => {
    const playersToDelete = [...this.state.players];
    playersToDelete.splice(index, 1);
    this.setState({ players: playersToDelete });
  };

  render() {
    return (
      <div className="App">
        <div className="container w-50">
          <InputForm
            change={this.inputChangeHandler}
            addPlayer={this.submitButtonHandler}
            currentPlayer={this.state.currentPlayer}
          />
          <Player currentPlayer={this.state.currentPlayer} />
          <Players
            players={this.state.players}
            deletePlayer={this.deletePlayerHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
