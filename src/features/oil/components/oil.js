import React, { Component } from 'react';
import MainMenu from "features/common/components/mainMenu";
import { injectIntl } from "react-intl";

import PopupComponent from "features/common/components/popupComponent";
import List from "features/common/components/list";
import { isEmpty } from "lodash";

import oilList from "data/oilList.json.js";


class Oil extends Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {selectedItem: null, showScrollTop: false};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
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

  closeModal() {
    this.setState({ selectedItem: null });
  }
  render() {
    const topButton = this.state.showScrollTop ? 
      <a href="#" className="scrollTop"><i className="fa fa-arrow-up" /></a> : null;
    return (
      <div className="Home">
        <MainMenu />
        <List
          sources={oilList}
          message={this.props.intl.formatMessage({ id: "oil_description" })}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
        {topButton}
        {!isEmpty(this.state.selectedItem) ?
          <PopupComponent closeModal={this.closeModal} item={this.state.selectedItem} /> : null
        }
      </div>
    );
  }
}

export default injectIntl(Oil);
