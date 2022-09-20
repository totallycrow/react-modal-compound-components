import React, { Component } from "react";

type HeaderProps = {
  title: string;
  toggle?: Function;
};

export default class ModalHeader extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button
          onClick={() => {
            if (this.props.toggle) {
              this.props.toggle();
            }
          }}
        >
          Click to close
        </button>
        {/* works */}
        {/* @ts-ignore */}
        {/* <button onClick={this.props.toggle}>Click to close</button> */}
      </div>
    );
  }
}
