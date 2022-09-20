import React, { Component } from "react";

export default class ModalContent extends Component {
  render() {
    // @ts-ignore
    return <div>{this.props.children}</div>;
  }
}
