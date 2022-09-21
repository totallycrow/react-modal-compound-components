import React, { Component } from "react";

type FooterProps = {
  callToActionLabel: string;
  toggle?: React.MouseEventHandler<HTMLButtonElement>;
};

export default class Footer extends Component<FooterProps> {
  render() {
    return (
      <div>
        <h3>footer</h3>

        <button onClick={this.props.toggle}>close</button>
        <button
          onClick={(e) => {
            alert("OK");

            if (this.props.toggle) this.props.toggle(e);
          }}
        >
          {this.props.callToActionLabel}
        </button>
      </div>
    );
  }
}
