import React, { Component } from "react";
import "./Modal.css";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

export default class Modal extends Component<any, any> {
  state = { isOpen: false };

  static Header = ModalHeader;
  static Content = ModalContent;

  toggle = () => {
    this.setState((prevState: any) => ({
      isOpen: !prevState.isOpen,
    }));
    console.log(this.state);
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { isOpen, toggle: this.toggle })
    );
    return (
      <div className="Modal">
        <div>
          <button onClick={this.toggle}>Click to show</button>
          {isOpen ? (
            <div>
              <div onClick={this.toggle}>test</div>
              <div>{children}</div>
            </div>
          ) : (
            <></>
          )}

          {/* <div onClick={this.toggle}>{isOpen ? <ModalHeader /> : <></>}</div> */}
        </div>
      </div>
    );
  }
}
