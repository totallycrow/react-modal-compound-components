import React, { Component } from "react";

export default class ModalHeader extends Component<any, any> {
  render() {
    // @ts-ignore
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.toggle}>Click to close</button>
      </div>
    );
  }
}
