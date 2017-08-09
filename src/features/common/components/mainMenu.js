import React, { Component } from 'react';
import { FormattedHTMLMessage, injectIntl } from "react-intl";
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
                <h3>Logo <FormattedHTMLMessage id="test" /></h3>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="MainMenu">
                  <a href="#onama">O nama</a>
                  <a href="#pivo">Pivo</a>
                  <a href="#vino">Vino</a>
                  <a href="#ulje">Ulje</a>
                  <a href="#contact">Kontakt</a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
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

export default injectIntl(MainMenu);
