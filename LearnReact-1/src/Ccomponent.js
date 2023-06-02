import React, { Component } from 'react';
import Menu from './Menu';

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <h1>
            <Menu />
            Hello, my name is {this.props.name} {this.props.number}
        </h1>
      </div>
    )
  }
}
Ccomponent.defaultProps = {name: "SSSghoul"}