import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from "react-intl";
import languages from "./data/intl";
import enLocaleData from 'react-intl/locale-data/en';
import hrLocaleData from 'react-intl/locale-data/hr';


import { Router, browserHistory } from "react-router";
import routes from "./routes";

import "styles/App.scss";


addLocaleData([...enLocaleData, ...hrLocaleData]);


const localLanguage = navigator.languages && navigator.languages.includes("hr") ?
  "hr" : "en";
const selectedLanguage = localStorage.getItem("language") || localLanguage;

localStorage.setItem("language", selectedLanguage);

const messages = languages
  .find(lang => lang.locale === selectedLanguage)
  .messages;

ReactDOM.render(
  <IntlProvider locale={selectedLanguage} messages={messages}>
    <Router history={browserHistory}>
        {routes}
    </Router>
  </IntlProvider>,
  document.getElementById('root')
);
