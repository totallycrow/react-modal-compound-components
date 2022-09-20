import React, { useState, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal/Modal";
import ModalFooter from "./components/Modal/ModalFooter";

function App() {
  return (
    <div>
      <div className="App">
        <Modal>
          <Modal.Header title="Test Header" />
          <Modal.Content>
            <div>Test</div>
          </Modal.Content>
          <ModalFooter callToActionLabel="Test Label" />
        </Modal>
      </div>
    </div>
  );
}

export default App;
