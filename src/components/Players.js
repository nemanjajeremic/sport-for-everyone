import React, { Component } from "react";

class Players extends Component {
  render() {
      const playersArray = this.props.players;
      let players = playersArray.map((player, index) => {
          return <div className="p-3." key={index}>{player.name}</div>
      });
      
      return (
      <div  className="card">
         {players}
      </div>)
  }
}

export default Players;
