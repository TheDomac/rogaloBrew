import React, { Component } from 'react';
import MainMenu from "features/common/components/mainMenu";
import { injectIntl } from "react-intl";


import topProductsList from "data/topProductsList.json.js"
import homeBeerList from "data/homeBeerList.json.js"

import { withRouter } from "react-router";
import PopupComponent from "features/common/components/popupComponent";
import List from "./list";


class Home extends Component {
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
          sources={topProductsList}
          message={this.props.intl.formatMessage({ id: "home_about_text" })}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
        <List
          sources={homeBeerList}
          message={this.props.intl.formatMessage({ id: "main_menu_beer" })}
          openModal={this.openModal}
          closeModal={this.closeModal}
          showMore="/beer"
        />
        <List
          sources={topProductsList}
          message={this.props.intl.formatMessage({ id: "main_menu_wine" })}
          openModal={this.openModal}
          closeModal={this.closeModal}
          showMore="/wine"
        />
        <List
          sources={homeBeerList}
          message={this.props.intl.formatMessage({ id: "main_menu_oil" })}
          openModal={this.openModal}
          closeModal={this.closeModal}
          showMore="/oil"
        />
        {topButton}
        {this.state.selectedItem && this.state.selectedItem.id ?
          <PopupComponent closeModal={this.closeModal} item={this.state.selectedItem} /> : null
        }
      </div>
    );
  }
}

export default injectIntl(withRouter(Home));
