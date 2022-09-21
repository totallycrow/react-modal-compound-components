import React, { Component } from "react";

// accesbility + ux
// 1. kawałek skryptu który wyłączy modal jak klikniesz poza niego e.target.nodes
// 2. lock scrolla (i case dla safari) overflow-y: hidden; add event listenerów scroll / touch e.preventDefault();
// 3. lockowanie tabów <-- https://www.npmjs.com/package/focus-trap-react

export default class ModalItem extends Component<any, any> {
  render() {
    return (
      <div>
        <div onClick={(e) => this.props.toggle}>test</div>

        <div>{this.props.children}</div>
      </div>
    );
  }
}
