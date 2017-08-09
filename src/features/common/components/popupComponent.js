import React, { Component } from 'react';
import Modal from "react-modal";
import contents from "data/contents.json"
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
    const blockContent = contents.find(content => content.id === this.props.id);
    const image = require(`images/${blockContent.backgroundImage}`);
    return (
        <Modal
          isOpen={true}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          className="popupComponent"
          overlayClassName="popupComponentOverlay"
        >
        <div className="clearfix">
          <h3>{blockContent.content.heading}</h3>
          <a onClick={this.closeModal.bind(this)}><i className="fa fa-times" /></a>
        </div>   
          <div className="container-fluid">
            <div className="row">
              <img className="col-xs-12 col-sm-6 col-md-5" src={image} alt={blockContent.content.heading} />
              <p className="col-xs-12 col-sm-6 col-md-7">
                {blockContent.content.description}
              </p>
            </div>
          </div>
        </Modal>
    );
  }
}

export default popupComponent;