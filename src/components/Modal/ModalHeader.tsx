import React, { Component } from "react";

type HeaderProps = {
  title: string;
  toggle?: React.MouseEventHandler<HTMLButtonElement>;
};

export default class ModalHeader extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button
          onClick={(e) => {
            if (this.props.toggle) {
              this.props.toggle(e);
            }
          }}
        >
          Click to close
        </button>
      </div>
    );
  }
}
