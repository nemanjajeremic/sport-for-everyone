import React, { Component } from "react";

class InputForm extends Component {
  render() {
    return (
      <div className="mb-3">
        <h1> Welcome to Sport for everyone</h1>
          <div className="card p-3">
            <form>
              <div className="form-group">
                <label htmlFor="name">Player name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  onChange={this.props.change}
                  value={this.props.currentPlayer}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.props.addPlayer}>
                Submit
              </button>
            </form>
          </div>
       
      </div>
    );
  }
}

export default InputForm;
