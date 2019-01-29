import React, { Component } from "react";

class Player extends Component {
  render() {
      return (
      <div  className="card">
          <p onClick={this.props.deletePlayer}>Name: {this.props.player}</p>
      </div>)
  }
}

export default Player;
