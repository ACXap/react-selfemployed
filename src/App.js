import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Checking from "./components/CheckingComponent/Checking";
import About from "./components/AboutComponent/About";
import Modal from "./components/Modal/Modal";
import NavControlB from "./components/NavControlB";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: this.createModal(false, "", "") }
  }

  openModal = (message, title) => { this.setState({ modal: this.createModal(true, message, title) }); }
  closeModal = () => { this.setState({ modal: this.createModal(false, "", "") }); }
  createModal = (isShow, message, title) => ({ isShow, message, title });

  render() {
    const { isShow, message, title } = this.state.modal
    return (
      <React.Fragment>
        {isShow && <Modal isShow={isShow} message={message} title={title} onClose={this.closeModal} />}

        <BrowserRouter>
          <NavControlB />
          <Route exact path="/"><Checking notifyError={this.openModal} /></Route>
          <Route path="/about"><About notifyError={this.openModal} /></Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}