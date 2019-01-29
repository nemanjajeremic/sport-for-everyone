import React, { Component } from "react";

class Players extends Component {
  render() {
    const playersArray = this.props.players;
    let players = playersArray.map((player, index) => {
      return (
        <div className="p-3 mb-1 shadow-sm" key={index}>
          Player name: {player.name}{" "}
          <button className="btn btn-primary" style={{cursor: "pointer"}}onClick={this.props.deletePlayer.bind(this, index)}>Delete player</button>
        </div>
      );
    });

    return <div className="card">{players}</div>;
  }
}

export default Players;
