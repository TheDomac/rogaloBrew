import React, { Component } from 'react';
import ImageBlock from "features/common/components/imageBlock";
import MainMenu from "features/common/components/mainMenu";

import photoBlocks from "data/contents.json"
import { withRouter } from "react-router";
import PopupComponent from "features/common/components/popupComponent";
/*import About1 from "features/about1";
import About2 from "features/about2";
import About3 from "features/about3";*/

class Home extends Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderPhotoBlock = this.renderPhotoBlock.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {selectedItemId: null, showScrollTop: false};
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll() {
    if (this.state.showScrollTop && window.pageYOffset === 0) {
      this.setState({ showScrollTop: false });
    } else if (window.pageYOffset > 0 && !this.state.showScrollTop) {
      this.setState({ showScrollTop: true });
    }
  }
  openModal(selectedItemId) {
    this.setState({ selectedItemId })
  }
  renderPhotoBlock(photoBlock) {
    return (
      <ImageBlock
        photoBlock={photoBlock}
        key={photoBlock.id}
        openModal={this.openModal}
      />
    );
  }
  closeModal() {
    this.setState({ selectedItemId: null });
  }
  render() {
    const topButton = this.state.showScrollTop ? 
      <a href="#" className="scrollTop"><i className="fa fa-arrow-up" /></a> : null;
    return (
      
      <div className="App">
        <MainMenu />  
        <div className="container-fluid">
          <div className="row">
            {photoBlocks.map(this.renderPhotoBlock)}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {photoBlocks.map(this.renderPhotoBlock)}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {photoBlocks.map(this.renderPhotoBlock)}
          </div>
        </div>
        {topButton}
            {this.state.selectedItemId ?
              <PopupComponent closeModal={this.closeModal} id={this.state.selectedItemId} /> : null}
      </div>
    );
  }
}

export default withRouter(Home);
