import React, { Component } from 'react';
import ImageBlock from "features/common/components/imageBlock";
import MainMenu from "features/common/components/mainMenu";

import { homeList } from "data/contents.json.js"
import { withRouter } from "react-router";
import PopupComponent from "features/common/components/popupComponent";
import About1 from "./about1";
/*import About2 from "features/about2";
import About3 from "features/about3";*/

class Home extends Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderPhotoBlock = this.renderPhotoBlock.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {selectedItem: null, showScrollTop: false};
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
  openModal(selectedItem) {
    this.setState({ selectedItem: selectedItem })
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
    this.setState({ selectedItem: null });
  }
  render() {
    const topButton = this.state.showScrollTop ? 
      <a href="#" className="scrollTop"><i className="fa fa-arrow-up" /></a> : null;
    return (
      <div className="App">
        <MainMenu />  
        <div className="container-fluid">
          <div className="row">
            {homeList.map(this.renderPhotoBlock)}
          </div>
        </div>
        <About1 />
        {topButton}
            {this.state.selectedItem && this.state.selectedItem.id ?
              <PopupComponent closeModal={this.closeModal} item={this.state.selectedItem} /> : null}
      </div>
    );
  }
}

export default withRouter(Home);
