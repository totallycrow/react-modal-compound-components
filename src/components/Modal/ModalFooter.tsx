import React, { Component } from "react";

export default class Footer extends Component<any, any> {
  render() {
    return (
      <div>
        <h3>footer</h3>
        {/* @ts-ignore */}
        <button onClick={this.props.toggle}>close</button>
        <button
          onClick={() => {
            alert("OK");
            // @ts-ignore
            this.props.toggle();
          }}
        >
          {/* @ts-ignore */}
          {this.props.callToActionLabel}
        </button>
      </div>
    );
  }
}
