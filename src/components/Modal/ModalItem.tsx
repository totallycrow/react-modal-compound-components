import React, { Component } from "react";

export default class ModalItem extends Component<any, any> {
  render() {
    return (
      <div>
        <div onClick={this.props.toggle}>test</div>

        <div>{this.props.children}</div>
      </div>
    );
  }
}
