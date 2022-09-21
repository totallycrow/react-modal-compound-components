import React, { Component } from "react";
import "./Modal.css";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalItem from "./ModalItem";

type ModalState = {
  isOpen: boolean;
};

// TS TYPE?
export default class Modal extends Component<any, ModalState> {
  // TS TYPE OF CHILDREN??
  state = { isOpen: false };

  static Header = ModalHeader;
  static Content = ModalContent;

  toggle = () => {
    this.setState((prevState: ModalState) => ({
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
            <ModalItem toggle={this.toggle}>{children}</ModalItem>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
