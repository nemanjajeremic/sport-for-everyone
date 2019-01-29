import React, { Component } from "react";

class Player extends Component {
  render() {
      return (
      <div  className="card p-3 mb-1">
        <h3>Current player</h3>
          <p> Name: {this.props.currentPlayer}</p>
      </div>)
  }
}

export default Player;
