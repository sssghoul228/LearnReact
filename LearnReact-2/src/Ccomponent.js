import React, { Component } from 'react';

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 10000
      }

      this.AddLight = this.AddLight.bind(this);
      this.ReduceLight = this.ReduceLight.bind(this);
      this.Reset = this.Reset.bind(this);
    }

    AddLight() {
      this.setState(state => ({
        count: state.count + 100
      }));
    }
    ReduceLight() {
      this.setState(state => ({
        count: state.count - 100
      }));
    }
    Reset() {
      this.setState(({
        count: 10000
      }));
    }
    
  render() {
    return (
      <div>
        <h1>Value Light: {this.state.count}</h1>
        <button onClick = {this.AddLight}>Add Light</button>
        <button onClick = {this.ReduceLight}>Reduce Light</button>
        <button onClick = {this.Reset}>Reset</button>
      </div>
    )}
}

Ccomponent.defaultProps = { name: "SSSghoul"}