import React, { Component } from 'react';
import Modal from "react-modal";
import "../styles/popupComponent.scss";

class popupComponent extends Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    const image = require(`images/${this.props.item.backgroundImage}`);
    return (
        <Modal
          isOpen={true}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          className="popupComponent"
          overlayClassName="popupComponentOverlay"
        >
        <div className="clearfix">
          <h3>{this.props.item.content.heading}</h3>
          <a onClick={this.closeModal.bind(this)}><i className="fa fa-times" /></a>
        </div>   
          <div className="container-fluid">
            <div className="row">
              <img className="col-xs-12 col-sm-6 col-md-5" src={image} alt={this.props.item.content.heading} />
              <p className="col-xs-12 col-sm-6 col-md-7">
                {this.props.item.content.description}
              </p>
            </div>
          </div>
        </Modal>
    );
  }
}

export default popupComponent;