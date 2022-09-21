import React, { Component } from "react";

export default class ModalContent extends Component<any> {
  // How to type compound children?
  render() {
    // Property 'children' does not exist on type 'Readonly<{}>'.ts(2339)
    return <div>{this.props.children}</div>;
  }
}
