import React, { Component } from 'react';
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";
import croFlag from "images/flag-cro.jpg";
import engFlag from "images/flag-en.jpg";

import "../styles/mainMenu.scss";

class MainMenu extends Component {
  constructor() {
    super();
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(language) {
    localStorage.setItem("language", language);
    global.location.reload();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 blackSeperator">
            <div className="row">
              <div className="col-xs-12 col-sm-3">
                <Link to="/"><h3>Logo</h3></Link>
              </div>
              <div className="col-xs-12 col-sm-6 hoverWhite">
                <div className="MainMenu">
                  <Link to="/"><FormattedMessage id="main_menu_home" /></Link>
                  <Link to="/about-us"><FormattedMessage id="main_menu_about_us" /></Link>
                  <Link to="/beer"><FormattedMessage id="main_menu_beer" /></Link>
                  <Link to="/wine"><FormattedMessage id="main_menu_wine" /></Link>
                  <Link to="/oil"><FormattedMessage id="main_menu_oil" /></Link>
                  <Link to="/contact"><FormattedMessage id="main_menu_contact" /></Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 hoverWhite">
                <a href="#"><i className="fa fa-envelope-o" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-facebook" /></a>
                <a onClick={this.changeLanguage.bind(null, "hr")}>
                  <img src={croFlag} alt="translation_croatian" />
                </a>
                <a onClick={this.changeLanguage.bind(null, "en")}>
                  <img src={engFlag} alt="translation_croatian" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
