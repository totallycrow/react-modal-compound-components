import React, { useState, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Modal, ModalHeader, ModalContent } from "./components/Modal/Modal"; // chakra-ui
import ModalFooter from "./components/Modal/ModalFooter";

function App() {
  return (
    <div>
      <div className="App">
        <Modal>
          <ModalHeader title="Test Header" />
          <ModalContent>
            <div>Test</div>
          </ModalContent>
          <ModalFooter callToActionLabel="Test Label" />
        </Modal>
      </div>
    </div>
  );
}

export default App;
